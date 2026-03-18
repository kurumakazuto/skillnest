export interface SignInPostResponse {
  success: boolean
  token?: string
  error?: { message: string }
}
