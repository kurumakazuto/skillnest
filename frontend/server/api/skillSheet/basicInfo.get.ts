import { prisma } from '../../../lib/prisma'
import type { BasicInfo } from '../../../types/api/skillSheet/basicInfo'
import { getUserIdFromCookie } from '../../utils/auth'

export default defineEventHandler(async (event): Promise<BasicInfo> => {
  // CookieからJWT取得し認証。問題なければuserID取得
  const userId = await getUserIdFromCookie(event)

  const userData = await prisma.user.findUnique({
    where: { id: userId },
  })

  if (!userData) {
    throw createError({ statusCode: 401, statusMessage: 'ユーザーが存在しません' })
  }

  // 資格
  const userQualifications = await prisma.userQualification.findMany({
    where: { userId: userId },
    include: { qualification: true },
  })
  const qualifications = userQualifications.map((uq) => ({
    id: uq.qualification.id,
    name: uq.qualification.name,
  }))

  // 経験技術
  const userSkills = await prisma.userSkill.findMany({
    where: { userId: userId },
    include: { skill: true },
  })
  const skills = userSkills.map((us) => ({
    id: us.skill.id,
    name: us.skill.name,
  }))

  const basicInfoData = {
    name: userData.name,
    nameKana: userData.nameKana,
    gender: userData.gender,
    birthDate: userData.birthDate?.toISOString() ?? null,
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
