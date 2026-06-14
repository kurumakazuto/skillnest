export interface ProjectHistory {
  projectHistoryList: {
    startDate: string // 開始年月
    endDate: string | null // 終了年月(null = 現在)
    title: string // プロジェクト名
    summary: string // 概要
    role: string | null // 役割
    developmentScale: number | null // 開発規模
    overallScale: number | null // 全体規模
    server: string | null // サーバー
    os: string | null // OS
    db: string | null // データベース
    techStacks: ProjectTechStack[] // FW・MW・ツール等
    languages: ProjectLanguage[] // 使用言語
    hasRequirementsDefinition: boolean // 要件定義
    hasBasicDesign: boolean // 基本設計
    hasDetailedDesign: boolean // 詳細設計
    hasImplementationUnitTest: boolean // 実装・単体テスト
    hasIntegrationTest: boolean // 結合テスト
    hasSystemTest: boolean // 総合テスト
    hasMaintenanceOperation: boolean // 保守・運用
  }[]
}
