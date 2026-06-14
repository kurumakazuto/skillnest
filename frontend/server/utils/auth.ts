import { jwtVerify } from 'jose'
import type { H3Event } from 'h3'

export async function getUserIdFromCookie(event: H3Event): Promise<string> {
  const token = getCookie(event, 'auth_token')
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: '認証が必要です' })
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload.userId as string
  } catch {
    throw createError({ statusCode: 401, statusMessage: '認証エラーです' })
  }
}
