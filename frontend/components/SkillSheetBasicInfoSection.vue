<script setup lang="ts">
import type { BasicInfo } from '../types/api/skillSheet/basicInfo'

// 画面のローダー表示制御
const loader = ref(false)
const displayError = ref<DisplayError[]>([])
// 親で表示するために一時的に保管する
const errors = ref<DisplayError[]>([])

const initQualifications = ref(
  Array.from({ length: 7 }, () => ({
    id: '',
    name: '',
    acquiredAt: '',
  }))
)

const initBasicInfoData = {
  name: null,
  nameKana: null,
  gender: null,
  birthDate: null,
  nationality: null,
  hasSpouse: false,
  nearestStation: null,
  qualifications: [],
  skills: [],
  specialties: null,
  selfPromotion: null,
}

const nationalities = [
  '日本',
  'アメリカ',
  '中国',
  '韓国',
  'ベトナム',
  'フィリピン',
  'インド',
  'ネパール',
  'インドネシア',
  'ブラジル',
  'イギリス',
  'フランス',
  'ドイツ',
  'カナダ',
  'オーストラリア',
  'その他',
]

const basicInfoData = ref<BasicInfo['basicInfoData']>(initBasicInfoData)
const { getBasicInfo, updateBasicInfo } = await useBasicInfo()
const { data, error, refresh } = await getBasicInfo()
const { refine } = useRefine()

// AIで該当項目の文章を整える（結果でそのまま上書き）
async function refineBasicInfoField(field: 'selfPromotion' | 'specialties') {
  const current = basicInfoData.value[field]
  if (!current) return
  loader.value = true
  try {
    basicInfoData.value[field] = await refine(field, current)
  } catch {
    displayError.value.push({ message: '整形に失敗しました' })
  } finally {
    loader.value = false
  }
}

// ユーザーの基本情報取得関数
async function fetchBasicInfoData() {
  loader.value = true
  await refresh()
  if (error.value || !data.value) {
    loader.value = false
    displayError.value.push({ message: 'ユーザーが存在しません。ログイン画面へ戻ります' })
    return
  }
  basicInfoData.value = data.value.basicInfoData
  setQualifications(basicInfoData.value)
  loader.value = false
}

function setQualifications(basicInfoData: BasicInfo['basicInfoData']) {
  initQualifications.value.forEach((initQualification, i) => {
    const qualification = basicInfoData.qualifications[i]
    if (qualification) {
      initQualification.id = qualification.id
      initQualification.name = qualification.name
      initQualification.acquiredAt = qualification.acquiredAt
    }
  })
}

// ユーザーの基本情報更新関数
async function updateBasicInfoData() {
  loader.value = true
  const reqBody = {
    name: basicInfoData.value.name,
    nameKana: basicInfoData.value.nameKana,
    gender: basicInfoData.value.gender,
    birthDate: basicInfoData.value.birthDate,
    nationality: basicInfoData.value.nationality,
    hasSpouse: basicInfoData.value.hasSpouse,
    nearestStation: basicInfoData.value.nearestStation,
    qualifications: initQualifications.value,
    skills: basicInfoData.value.skills,
    specialties: basicInfoData.value.specialties,
    selfPromotion: basicInfoData.value.selfPromotion,
  }
  const { error } = await updateBasicInfo({ basicInfoData: reqBody })
  if (error.value) {
    loader.value = false
    if (error.value.statusCode === 400) {
      displayError.value.push({ message: '入力内容に誤りがあります' })
    } else if (error.value.statusCode === 500) {
      displayError.value.push({ message: 'サーバーエラーが発生しました' })
    } else {
      displayError.value.push({ message: '予期しないエラーが発生しました' })
    }
    return false
  }
  await fetchBasicInfoData()
  loader.value = false
  return true
}

// バリデーション
function validateBasicInfo() {
  errors.value = []
  // 文字数制限
  // 氏名
  const nameResult = validateMaxLengthExceeded(basicInfoData.value.name, 30, '氏名')
  if (nameResult.hasError) {
    errors.value.push({
      message: nameResult.errorMessage,
    })
  }
  // ふりがな
  const nameKanaResult = validateMaxLengthExceeded(basicInfoData.value.nameKana, 30, 'ふりがな')
  if (nameKanaResult.hasError) {
    errors.value.push({
      message: nameKanaResult.errorMessage,
    })
  }
  // 得意分野
  const specialtiesResult = validateMaxLengthExceeded(
    basicInfoData.value.specialties,
    150,
    '得意分野'
  )
  if (specialtiesResult.hasError) {
    errors.value.push({
      message: specialtiesResult.errorMessage,
    })
  }
  // 自己PR
  const selfPromotionResult = validateMaxLengthExceeded(
    basicInfoData.value.selfPromotion,
    300,
    '自己PR'
  )
  if (selfPromotionResult.hasError) {
    errors.value.push({
      message: selfPromotionResult.errorMessage,
    })
  }
  // 最寄駅
  const nearestStationResult = validateMaxLengthExceeded(
    basicInfoData.value.nearestStation,
    18,
    '最寄駅'
  )
  if (nearestStationResult.hasError) {
    errors.value.push({
      message: nearestStationResult.errorMessage,
    })
  }
  // 資格
  basicInfoData.value.qualifications.forEach((qualification) => {
    const qualificationResult = validateMaxLengthExceeded(qualification.name, 18, '資格')
    if (qualificationResult.hasError) {
      errors.value.push({
        message: qualificationResult.errorMessage,
      })
    }
  })
  if (errors.value.length) {
    return false
  }
  return true
}

function closeDisplayErrorDialog() {
  displayError.value = []
}

const skillInput = ref('')
function addSkill() {
  if (!skillInput.value.trim()) return
  basicInfoData.value.skills.push({ id: '', name: skillInput.value.trim() })
  skillInput.value = ''
}

function calcAge(birthDate: string | null): number | null {
  if (!birthDate) return null
  const birth = new Date(birthDate)
  const today = new Date()

  let age = today.getFullYear() - birth.getFullYear()

  // 今年まだ誕生日を迎えていなければ1引く
  const month = today.getMonth() - birth.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

defineExpose({ updateBasicInfoData, validateBasicInfo, errors })

await fetchBasicInfoData()
</script>

<template>
  <div class="mb-5 border border-black">
    <!-- １行目 -->
    <div class="grid grid-cols-12">
      <div class="col-span-1 border border-black bg-slate-200 p-1">ふりがな</div>
      <input
        v-model="basicInfoData.nameKana"
        class="col-span-4 border border-black p-1 outline-none"
      />
      <div class="col-span-1 border border-black bg-slate-200 p-1">性別</div>
      <select
        v-model="basicInfoData.gender"
        class="col-span-1 border border-black p-1 outline-none"
      >
        <option value="male">男</option>
        <option value="female">女</option>
      </select>

      <div class="col-span-1 border border-black bg-slate-200 p-1">年齢</div>
      <!-- TODO: 生年月日入力すると自動で年齢表示されるようにする -->
      <div class="col-span-1 border border-black p-1">{{ calcAge(basicInfoData.birthDate) }}</div>

      <div class="col-span-1 border border-black bg-slate-200 p-1">生年月日</div>
      <input
        v-model="basicInfoData.birthDate"
        type="date"
        class="col-span-2 border border-black p-1"
      />
    </div>
    <!-- ２行目 -->
    <div class="grid grid-cols-12">
      <div class="col-span-1 border border-black bg-slate-200 p-1">氏名</div>
      <input v-model="basicInfoData.name" class="col-span-4 border border-black p-1 outline-none" />
      <div class="col-span-1 border border-black bg-slate-200 p-1 outline-none">国籍</div>
      <select
        v-model="basicInfoData.nationality"
        class="w-full col-span-1 border border-black p-1 outline-none"
      >
        <option value="" disabled>選択してください</option>
        <option v-for="item in nationalities" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <div class="col-span-1 border border-black bg-slate-200 p-1">配偶者</div>
      <select
        v-model="basicInfoData.hasSpouse"
        class="col-span-1 border border-black p-1 outline-none"
      >
        <option :value="false">無し</option>
        <option :value="true">有り</option>
      </select>
      <div class="col-span-1 border border-black bg-slate-200 p-1">最寄駅</div>
      <input
        v-model="basicInfoData.nearestStation"
        class="col-span-2 border border-black p-1 outline-none"
      />
    </div>
    <div class="grid grid-cols-12">
      <!-- 経験技術 -->
      <div class="col-span-1 border border-black bg-slate-200 p-1">経験技術</div>
      <div class="col-span-8 border border-black p-1">
        <div class="flex flex-wrap gap-1">
          <span
            v-for="(skill, i) in basicInfoData.skills"
            :key="i"
            class="group inline-flex items-center text-sm px-1 py-0.5 rounded-sm hover:bg-slate-100"
          >
            {{ skill.name }}
            <button
              class="cursor-pointer text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100"
              @click="basicInfoData.skills.splice(i, 1)"
            >
              ×
            </button>
          </span>
        </div>
        <!-- TODO: 将来的にコンボボックス（入力可能なプルダウン）に変更する -->
        <input
          v-model="skillInput"
          class="border-2 border-transparent rounded-sm transition hover:bg-slate-100 hover:shadow-sm hover:border-blue-400"
          @keydown.enter.prevent="addSkill"
        />
      </div>

      <!-- 資格 -->
      <div class="col-span-3 row-span-3 max-h-[260px] overflow-y-auto">
        <div class="grid grid-cols-12">
          <div class="col-span-4 border border-black bg-slate-200 p-1">取得年月</div>
          <div class="col-span-8 border border-black bg-slate-200 p-1">資格</div>
        </div>

        <div
          v-for="(qualification, index) in initQualifications"
          :key="index"
          class="grid grid-cols-12"
        >
          <div class="col-span-4 border border-black p-1">
            <input type="month" v-model="qualification.acquiredAt" class="w-full outline-none" />
          </div>
          <div class="col-span-8 border border-black p-1">
            <input v-model="qualification.name" class="w-full outline-none" />
          </div>
        </div>
      </div>
      <!-- 4行目 -->
      <div class="col-span-1 border border-black bg-slate-200 p-1 flex flex-col items-start gap-1">
        <span>得意分野</span>
        <button
          type="button"
          class="inline-flex items-center gap-1 whitespace-nowrap text-xs px-2 py-0.5 rounded border border-sky-300 bg-sky-50 text-sky-700 cursor-pointer hover:bg-sky-100 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="loader || !basicInfoData.specialties"
          @click="refineBasicInfoField('specialties')"
        >
          <svg
            viewBox="0 0 24 24"
            class="w-3.5 h-3.5 shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5z"
            />
          </svg>
          AIで整える
        </button>
      </div>
      <div class="col-span-8 border border-black p-1">
        <textarea
          v-model="basicInfoData.specialties"
          class="w-full h-full border-none outline-none shadow-none resize-none"
        ></textarea>
      </div>

      <!-- 5行目 -->
      <div class="col-span-1 border border-black bg-slate-200 p-1 flex flex-col items-start gap-1">
        <span>自己PR</span>
        <button
          type="button"
          class="inline-flex items-center gap-1 whitespace-nowrap text-xs px-2 py-0.5 rounded border border-sky-300 bg-sky-50 text-sky-700 cursor-pointer hover:bg-sky-100 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="loader || !basicInfoData.selfPromotion"
          @click="refineBasicInfoField('selfPromotion')"
        >
          <svg
            viewBox="0 0 24 24"
            class="w-3.5 h-3.5 shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5z"
            />
          </svg>
          AIで整える
        </button>
      </div>
      <div class="col-span-8 border border-black p-1 min-h-[98px]">
        <textarea
          v-model="basicInfoData.selfPromotion"
          class="w-full h-full border-none outline-none shadow-none resize-none"
        ></textarea>
      </div>
    </div>
  </div>
  <UiLoader v-if="loader" />
  <ErrorDisplayErrorDialog
    v-if="displayError.length"
    v-bind:errors="displayError"
    @close="closeDisplayErrorDialog()"
  />
</template>
