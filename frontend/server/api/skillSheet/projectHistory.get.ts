import { prisma } from '../../../lib/prisma'
import type { ProjectHistory } from '../../../types/api/skillSheet/projectHistory'
import { getUserIdFromCookie } from '../../utils/auth'

export default defineEventHandler(async (event): Promise<ProjectHistory> => {
  // CookieからJWT取得し認証。問題なければuserID取得
  const userId = await getUserIdFromCookie(event)

  const userData = await prisma.user.findUnique({
    where: { id: userId },
  })

  if (!userData) {
    throw createError({ statusCode: 401, statusMessage: 'ユーザーが存在しません' })
  }

  // 技術・言語はプロジェクト直下になったので include で直接取得
  const projects = await prisma.project.findMany({
    where: { userId },
    include: {
      techStacks: true,
      languages: true,
    },
  })

  const projectHistoryList: ProjectHistory['projectHistoryList'] = projects.map((project) => ({
    startDate: project.startDate.toISOString().slice(0, 10),
    endDate: project.endDate?.toISOString().slice(0, 10) ?? null,
    title: project.title,
    summary: project.summary,
    role: project.role,
    developmentScale: project.developmentScale,
    overallScale: project.overallScale,
    server: project.server,
    os: project.os,
    db: project.db,
    techStacks: project.techStacks.map((ts) => ({ id: ts.id, name: ts.name })),
    languages: project.languages.map((l) => ({ id: l.id, name: l.name })),
    hasRequirementsDefinition: project.hasRequirementsDefinition,
    hasBasicDesign: project.hasBasicDesign,
    hasDetailedDesign: project.hasDetailedDesign,
    hasImplementationUnitTest: project.hasImplementationUnitTest,
    hasIntegrationTest: project.hasIntegrationTest,
    hasSystemTest: project.hasSystemTest,
    hasMaintenanceOperation: project.hasMaintenanceOperation,
  }))

  return {
    projectHistoryList,
  }
})
