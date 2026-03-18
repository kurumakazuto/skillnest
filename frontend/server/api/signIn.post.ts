import type { AuthPostResponse } from '@/types/api/authPostResponse'
import type { AuthPostRequest } from '@/types/api/authPostRequest'

export default defineEventHandler(async (event): Promise<AuthPostResponse> => {
  // リクエストBody
  const reqBody = await readBody<AuthPostRequest>(event)
  // ここでデータベースにログインID,passwordが存在するか確認し、ない場合はエラーを返す
  // const loginId =
  // const password =

  // ログインIDかパスワードがなければエラーを返す
  // if (!loginId || !password) {
  //   return error
  // }
})
