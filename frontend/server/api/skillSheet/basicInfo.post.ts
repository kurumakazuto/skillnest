import { prisma } from '../../../lib/prisma'
import type { BasicInfo } from '../../../types/api/skillSheet/basicInfo'
import { getUserIdFromCookie } from '../../utils/auth'
import { validateMaxLengthString } from '../../utils/validation'

export default defineEventHandler(async (event): Promise<any> => {
  // リクエストBody
  const reqBody = await readBody<BasicInfo>(event)
  const {
    name,
    nameKana,
    gender,
    birthDate,
    nationality,
    hasSpouse,
    nearestStation,
    qualifications,
    skills,
    specialties,
    selfPromotion,
  } = reqBody.basicInfoData

  // バリデーション
  // 文字数制限
  validateMaxLengthString(name, '氏名', 50)
  validateMaxLengthString(nameKana, 'ふりがな', 100)
  validateMaxLengthString(nationality, '最寄駅', 50)
  validateMaxLengthString(specialties, '得意分野', 100)
  validateMaxLengthString(selfPromotion, '自己PR', 2000)

  if (qualifications.length && qualifications.some((qualification) => qualification.length > 100)) {
    throw createError({
      statusCode: 400,
      statusMessage: '資格は100文字以内で入力してください。',
    })
  }

  // CookieからJWT取得し認証。問題なければuserID取得
  const userId = await getUserIdFromCookie(event)

  // DBに保存
  await prisma.user.update({
    where: { id: userId },
    data: {
      name,
      nameKana,
      gender,
      birthDate: birthDate ? new Date(birthDate) : null,
      nationality,
      hasSpouse,
      nearestStation,
      qualifications: {
        deleteMany: {},
        create: await Promise.all(
          qualifications.map(async (name) => {
            const qualification = await prisma.qualification.upsert({
              where: { name },
              create: { name },
              update: {},
            })
            return { qualificationId: qualification.id }
          })
        ),
      },
      skills: {
        deleteMany: {},
        create: await Promise.all(
          skills.map(async (name) => {
            const skill = await prisma.skill.upsert({
              where: { name },
              create: { name },
              update: {},
            })
            return { skillId: skill.id }
          })
        ),
      },
      specialties,
      selfPromotion,
    },
  })
})
