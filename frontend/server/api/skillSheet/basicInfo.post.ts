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
  validateMaxLengthString(name, '氏名', 30)
  validateMaxLengthString(nameKana, 'ふりがな', 30)
  validateMaxLengthString(specialties, '得意分野', 150)
  validateMaxLengthString(selfPromotion, '自己PR', 300)
  validateMaxLengthString(nearestStation, '最寄駅', 18)
  qualifications.forEach((qualification) => {
    validateMaxLengthString(qualification.name, '資格', 30)
  })

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
        create: qualifications
          .filter((qualification) => qualification.name)
          .map((qualification) => ({
            name: qualification.name,
            acquiredAt: qualification.acquiredAt ? new Date(qualification.acquiredAt) : null,
          })),
      },
      skills: {
        deleteMany: {},
        create: skills.map((skill) => ({ name: skill.name })),
      },
      specialties,
      selfPromotion,
    },
  })
})
