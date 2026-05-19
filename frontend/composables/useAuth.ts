import type { SignInPostResponse } from '~/types/api/signInPostResponse'
import type { SignInPostRequest } from '~/types/api/signInPostRequest'
import type { SignUpPostRequest } from '@/types/api/signUpPostRequest'
import type { SignUpPostResponse } from '@/types/api/signUpPostResponse'

export const useAuth = () => {
  const token = useCookie<string | null>('auth_token')
  // !!x は「否定を2回」するので、結果として x を真偽値に変換したものになる
  const loggedIn = computed(() => !!token.value)

  // 新規登録
  const signUp = async (reqBody: SignUpPostRequest) => {
    const { data, error } = await useFetch<SignUpPostResponse>('api/signUp', {
      method: 'POST',
      body: reqBody,
    })

    return { data, error }
  }

  // ログイン
  const signIn = async (reqBody: SignInPostRequest) => {
    const { data, error } = await useFetch<SignInPostResponse>('/api/signIn', {
      method: 'POST',
      body: reqBody,
    })

    // todo: サーバー側でトークンを作成し、返すようにする
    if (!error.value && data.value?.token) {
      // ここで「サーバーが返したトークン」をクッキーに保存する
      token.value = data.value.token
    }

    return { data, error }
  }

  // ログアウト
  const signOut = () => {
    token.value = null
    navigateTo('/login')
  }

  return { signUp, signIn, signOut, loggedIn }
}
