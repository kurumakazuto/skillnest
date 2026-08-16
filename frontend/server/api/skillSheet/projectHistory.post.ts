import { prisma } from '../../../lib/prisma'
import type { ProjectHistory } from '../../../types/api/skillSheet/projectHistory'
import { getUserIdFromCookie } from '../../utils/auth'
import { validateRequiredString, validateMaxLengthString } from '../../utils/validation'

export default defineEventHandler(async (event): Promise<any> => {
  // リクエストBody
  const reqBody = await readBody<ProjectHistory>(event)
  // バリデーション
  reqBody.projectHistoryList.forEach((reqProjectHistory) => {
    // 未入力
    validateRequiredString(reqProjectHistory.startDate, '開始年月')
    validateRequiredString(reqProjectHistory.title, 'プロジェクト名')
    validateRequiredString(reqProjectHistory.summary, '概要')
    // 文字数制限
    validateMaxLengthString(reqProjectHistory.title, 'プロジェクト名', 30)
    validateMaxLengthString(reqProjectHistory.summary, '概要', 300)
  })

  // CookieからJWT取得し認証。問題なければuserID取得
  const userId = await getUserIdFromCookie(event)

  // DBに保存
  // 非同期処理にするためforEachでなくfor ofを使用
  for (const project of reqBody.projectHistoryList) {
    await prisma.project.update({
      where: { id: userId },
      data: {
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
          deleteMany: {},
          create: await Promise.all(
            project.techStacks.map(async (name) => {
              const techStack = await prisma.techStack.upsert({
                where: { name },
                create: { name },
                update: {},
              })
              return { techStackId: techStack.id }
            })
          ),
        },
        languages: {
          deleteMany: {},
          create: await Promise.all(
            project.languages.map(async (name) => {
              const language = await prisma.language.upsert({
                where: { name },
                create: { name },
                update: {},
              })
              return { languageId: language.id }
            })
          ),
        },
        hasRequirementsDefinition: project.hasRequirementsDefinition,
        hasBasicDesign: project.hasBasicDesign,
        hasDetailedDesign: project.hasDetailedDesign,
        hasImplementationUnitTest: project.hasImplementationUnitTest,
        hasIntegrationTest: project.hasIntegrationTest,
        hasSystemTest: project.hasSystemTest,
        hasMaintenanceOperation: project.hasMaintenanceOperation,
      },
    })
  }
})
