import type * as T from './index' // 既存の types/index.ts を参照
export {}

declare global {
  interface LoginInfo {
    // ログイン情報
    email: string
    password: string
  }

  interface SignUpInfo {
    // アカウント作成情報
    email: string
    password: string
    confirmPassword: string
  }

  interface Error {
    index: number // スプレッドシート上から
    // level: number // エラーレベル。
  }

  interface ProjectTechStack {
    id: string
    name: string
  }

  interface ProjectLanguage {
    id: string
    name: string
  }
  interface UserQualification {
    id: string
    name: string
  }

  interface UserSkill {
    id: string
    name: string
  }
}
