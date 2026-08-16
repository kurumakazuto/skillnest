import { prisma } from '../../../lib/prisma'
import { getUserIdFromCookie } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  // CookieからJWT取得し認証。問題なければuserID取得
  const userId = await getUserIdFromCookie(event)

  // ユーザー削除
  // ※ 資格・経験技術・プロジェクト（＋技術・言語）は onDelete: Cascade で連鎖削除される
  await prisma.user.delete({
    where: { id: userId },
  })

  return { success: true }
})
