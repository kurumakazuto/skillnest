export interface BasicInfo {
  basicInfoData: {
    name: string | null // 氏名
    nameKana: string | null // ふりがな
    gender: string | null // 性別
    birthDate: string | null // 誕生日
    nationality: string | null // 国籍
    hasSpouse: boolean | null // 配偶者
    nearestStation: string | null // 最寄駅
    qualifications: UserQualification[] // 資格
    skills: UserSkill[] // 経験技術
    specialties: string | null // 得意分野
    selfPromotion: string | null // 自己PR
  }
}
