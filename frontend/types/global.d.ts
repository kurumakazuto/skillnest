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
  }

  type ProjectHistoryWithNumber = ProjectHistory['projectHistoryList'][number] & {
    projectHistoryNumber: number
    isOngoing: boolean // プロジェクトが継続中であるか
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
    acquiredAt: string
  }

  interface UserSkill {
    id: string
    name: string
  }

  interface DisplayError {
    message: string
    field?:
      // 入力欄を赤くする時だけ
      | 'startDate'
      | 'title'
      | 'summary'
      | 'developmentScale'
      | 'overallScale'
      | 'server'
      | 'os'
      | 'db'
      | 'techStacks'
      | 'languages'
    projectIndex?: number // 入力欄を赤くする時だけ
  }
}
