import argon2 from 'argon2'
import { prisma } from '../../../lib/prisma'
import type { SignUpPostRequest } from '../../../types/api/auth/signUpPostRequest'
import type { SignUpPostResponse } from '../../../types/api/auth/signUpPostResponse'
import { SignJWT } from 'jose'

export default defineEventHandler(async (event): Promise<SignUpPostResponse> => {
  const reqBody = await readBody<SignUpPostRequest>(event)
  const { email, password, confirmPassword } = reqBody

  // バリデーション
  // 未入力
  if (!email || !password || !confirmPassword) {
    throw createError({
      statusCode: 400,
      statusMessage: 'メールアドレス、パスワード、確認用パスワードは必須です。',
    })
  }
  // パスワードとパスワード（確認用）の一致確認
  if (password !== confirmPassword) {
    throw createError({
      statusCode: 400,
      statusMessage: 'パスワードとパスワード（確認用）が一致していません。',
    })
  }
  // メールアドレスが既に登録されていないかチェック
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  if (existingUser) {
    throw createError({
      statusCode: 409,
      statusMessage: '登録済みのメールアドレスです',
    })
  }

  // パスワードをハッシュ化
  // Argon2idを使用
  const hashedPassword = await argon2.hash(password, {
    type: argon2.argon2id,
  })

  // DBに保存
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })

  // トークンを作成
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const token = await new SignJWT({ userId: newUser.id })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret)

  return { token }
})
