import { jwtVerify } from 'jose'
import type { H3Event } from 'h3'

export async function getUserIdFromCookie(event: H3Event): Promise<string> {
  // cookieからJWTトークンを取得。無ければ未ログインとして弾く
  const token = getCookie(event, 'auth_token')
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: '認証が必要です' })
  }

  // 秘密鍵を暗号処理用のバイト列に変換（トークン発行時と同じ鍵を使う）
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  try {
    // 署名と有効期限を検証。問題なければ中身(payload)を取り出す
    const { payload } = await jwtVerify(token, secret)
    // payloadに詰めておいたuserIdを返す（= リクエスト元のユーザー）
    return payload.userId as string
  } catch {
    // 署名不正(改ざん)・期限切れ・壊れたトークンはすべてここで401として弾く
    throw createError({ statusCode: 401, statusMessage: '認証エラーです' })
  }
}
