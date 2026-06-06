import type { SignInPostResponse } from '../../types/api/auth/signInPostResponse'
import type { SignInPostRequest } from '../../types/api/auth/signInPostRequest'
import type { SignUpPostRequest } from '../../types/api/auth/signUpPostRequest'
import type { SignUpPostResponse } from '../../types/api/auth/signUpPostResponse'

export const useAuth = async () => {
  const token = useCookie<string | null>('auth_token')
  // !!x は「否定を2回」するので、結果として x を真偽値に変換したものになる
  const loggedIn = computed(() => !!token.value)

  // 新規登録
  const signUp = async (reqBody: SignUpPostRequest) => {
    const { data, error } = await useFetch<SignUpPostResponse>('/api/auth/signUp', {
      method: 'POST',
      body: reqBody,
    })

    // トークンをcookieに保存
    if (!error.value && data.value?.token) {
      token.value = data.value.token
    }

    return { data, error }
  }

  // ログイン
  const signIn = async (reqBody: SignInPostRequest) => {
    const { data, error } = await useFetch<SignInPostResponse>('/api/auth/signIn', {
      method: 'POST',
      body: reqBody,
    })

    // トークンをcookieに保存
    if (!error.value && data.value?.token) {
      token.value = data.value.token
    }

    return { data, error }
  }

  // ログアウト
  const signOut = () => {
    token.value = null
    navigateTo('/login')
  }

  return { signUp, signIn, signOut, loggedIn, token }
}
