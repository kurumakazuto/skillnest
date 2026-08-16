import argon2 from 'argon2'
import { prisma } from '../../../lib/prisma'
import type { SignInPostResponse } from '../../../types/api/auth/signInPostResponse'
import type { SignInPostRequest } from '../../../types/api/auth/signInPostRequest'
import { SignJWT } from 'jose'

export default defineEventHandler(async (event): Promise<SignInPostResponse> => {
  // リクエストBody
  const reqBody = await readBody<SignInPostRequest>(event)
  const { email, password } = reqBody

  // バリデーション
  // 未入力
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'メールアドレス、パスワードは必須です。',
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
      message: 'メールアドレスかパスワードが間違っています。',
    })
  }
  // TODO: Node.js 24.14+ の undici 回帰バグで、useFetch 経由の 4xx/5xx が 500 表示になる場合がある。
  // 後で回避策を検討する。
  const isValid = await argon2.verify(user.password, password)
  if (!isValid) {
    throw createError({
      statusCode: 401,
      message: 'メールアドレスかパスワードが間違っています。',
    })
  }
  // トークンを作成
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const token = await new SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret)

  return {
    token: token,
  }
})
