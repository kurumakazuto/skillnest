import argon2 from 'argon2'
import { prisma } from '../../lib/prisma'
import type { SignInPostResponse } from '@/types/api/SignInPostResponse'
import type { SignInPostRequest } from '@/types/api/SignInPostRequest'

export default defineEventHandler(async (event): Promise<SignInPostResponse> => {
  // リクエストBody
  const reqBody = await readBody<SignInPostRequest>(event)
  const { email, password } = reqBody

  // バリデーション
  // 未入力
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'メールアドレス、パスワードは必須です。',
    })
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'メールアドレスかパスワードが間違っています。',
    })
  }

  const isValid = await argon2.verify(user.password, password)
  if (!isValid) {
    throw createError({
      statusCode: 401,
      statusMessage: 'メールアドレスかパスワードが間違っています。',
    })
  }
  return {
    success: true,
    token: '', // TODO: cookie用のトークン作成する
  }
})
