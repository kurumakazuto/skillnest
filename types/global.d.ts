import type * as T from "./index"; // 既存の types/index.ts を参照
export {};

declare global {
  interface LoginInfo { // ログイン情報
    userId: string;
    password: string;
  }
}
