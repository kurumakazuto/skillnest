import { prisma } from '../../../lib/prisma'
import type { ProjectHistory } from '../../../types/api/skillSheet/projectHistory'
import { getUserIdFromCookie } from '../../utils/auth'
import {
  validateRequiredString,
  validateMaxLengthString,
  validateOutOfRange,
} from '../../utils/validation'

export default defineEventHandler(async (event): Promise<any> => {
  // リクエストBody
  const reqBody = await readBody<ProjectHistory>(event)

  // 保存対象（削除フラグの立っていないもの）
  const targetProjects = reqBody.projectHistoryList.filter((project) => !project.isDeleted)

  // バリデーション
  targetProjects.forEach((reqProjectHistory) => {
    // 未入力
    validateRequiredString(reqProjectHistory.startDate, '開始年月')
    validateRequiredString(reqProjectHistory.title, 'プロジェクト名')
    validateRequiredString(reqProjectHistory.summary, '概要')
    // 文字数制限
    validateMaxLengthString(reqProjectHistory.title, 'プロジェクト名', 30)
    validateMaxLengthString(reqProjectHistory.summary, '概要', 300)
    validateOutOfRange(reqProjectHistory.developmentScale, '開発人数', 0, 9999)
    validateOutOfRange(reqProjectHistory.overallScale, '全体人数', 0, 9999)
  })

  // CookieからJWT取得し認証。問題なければuserID取得
  const userId = await getUserIdFromCookie(event)

  // DBに保存
  // プロジェクト（＋技術・言語）はユーザー直下になったので、全削除→作り直しで総入れ替え
  // ※ Project削除時、技術・言語は onDelete: Cascade で連鎖削除される
  await prisma.user.update({
    where: { id: userId },
    data: {
      projects: {
        deleteMany: {},
        create: targetProjects.map((project) => ({
          startDate: new Date(project.startDate),
          endDate: project.endDate ? new Date(project.endDate) : null,
          title: project.title,
          summary: project.summary,
          role: project.role,
          developmentScale: project.developmentScale,
          overallScale: project.overallScale,
          server: project.server,
          os: project.os,
          db: project.db,
          techStacks: {
            create: project.techStacks.map((techStack) => ({ name: techStack.name })),
          },
          languages: {
            create: project.languages.map((language) => ({ name: language.name })),
          },
          hasRequirementsDefinition: project.hasRequirementsDefinition,
          hasBasicDesign: project.hasBasicDesign,
          hasDetailedDesign: project.hasDetailedDesign,
          hasImplementationUnitTest: project.hasImplementationUnitTest,
          hasIntegrationTest: project.hasIntegrationTest,
          hasSystemTest: project.hasSystemTest,
          hasMaintenanceOperation: project.hasMaintenanceOperation,
        })),
      },
    },
  })
})
