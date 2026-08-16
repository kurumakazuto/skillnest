import { prisma } from '../../../lib/prisma'
import type { BasicInfo } from '../../../types/api/skillSheet/basicInfo'
import { getUserIdFromCookie } from '../../utils/auth'

export default defineEventHandler(async (event): Promise<BasicInfo> => {
  // CookieからJWT取得し認証。問題なければuserID取得
  const userId = await getUserIdFromCookie(event)

  const userData = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      qualifications: true,
      skills: true,
    },
  })

  if (!userData) {
    throw createError({ statusCode: 401, statusMessage: 'ユーザーが存在しません' })
  }

  const qualifications = userData.qualifications.map((q) => ({
    id: q.id,
    name: q.name,
    acquiredAt: q.acquiredAt ? q.acquiredAt.toISOString().slice(0, 7) : '',
  }))

  const skills = userData.skills.map((s) => ({
    id: s.id,
    name: s.name,
  }))

  const basicInfoData = {
    name: userData.name,
    nameKana: userData.nameKana,
    gender: userData.gender,
    birthDate: userData.birthDate?.toISOString().slice(0, 10) ?? null,
    nationality: userData.nationality,
    hasSpouse: userData.hasSpouse,
    nearestStation: userData.nearestStation,
    qualifications: qualifications,
    skills: skills,
    specialties: userData.specialties,
    selfPromotion: userData.selfPromotion,
  }
  return {
    basicInfoData,
  }
})
