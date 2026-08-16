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

  const projects = await prisma.project.findMany({
    where: { userId },
    include: {
      techStacks: { include: { techStack: true } },
      languages: { include: { language: true } },
    },
  })

  const projectHistoryList: ProjectHistory['projectHistoryList'] = projects.map((project) => ({
    startDate: project.startDate.toISOString(),
    endDate: project.endDate?.toISOString() ?? null,
    title: project.title,
    summary: project.summary,
    role: project.role,
    developmentScale: project.developmentScale,
    overallScale: project.overallScale,
    server: project.server,
    os: project.os,
    db: project.db,
    techStacks: project.techStacks.map((ts) => ({
      id: ts.techStack.id,
      name: ts.techStack.name,
    })),
    languages: project.languages.map((l) => ({ id: l.language.id, name: l.language.name })),
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
