<script setup lang="ts">
// 画面のローダー表示制御
const loader = ref(false)
const displayError = ref<DisplayError[]>([])
// 親で表示するために一時的に保管する
const errors = ref<DisplayError[]>([])

const initProjectHistory = {
  projectHistoryNumber: 0,
  startDate: '',
  endDate: null,
  isOngoing: false,
  title: '',
  summary: '',
  role: null,
  developmentScale: null,
  overallScale: null,
  server: null,
  os: null,
  db: null,
  techStacks: [],
  languages: [],
  hasRequirementsDefinition: false,
  hasBasicDesign: false,
  hasDetailedDesign: false,
  hasImplementationUnitTest: false,
  hasIntegrationTest: false,
  hasSystemTest: false,
  hasMaintenanceOperation: false,
}

const projectHistoryList = ref<ProjectHistoryWithNumber['projectHistoryList']>([initProjectHistory])
const reversedProjectHistoryList = computed(() => [...projectHistoryList.value].reverse())
const { getProjectHistory, updateProjectHistory } = await useProjectHistory()
const { data, error, refresh } = await getProjectHistory()
const { refine } = useRefine()

// AIで業務概要を整える（結果でそのまま上書き）
async function refineSummary(item: ProjectHistoryWithNumber) {
  if (!item.summary) return
  loader.value = true
  try {
    item.summary = await refine('summary', item.summary)
  } catch {
    displayError.value.push({ message: '整形に失敗しました' })
  } finally {
    loader.value = false
  }
}

// ユーザーのプロジェクト情報取得関数
async function fetchProjectHistoryLit() {
  loader.value = true
  await refresh()
  if (error.value || !data.value) {
    loader.value = false
    displayError.value.push({ message: 'ユーザーが存在しません。ログイン画面へ戻ります' })
    return
  }
  // APIに無いフロント専用フィールド（番号・継続中フラグ）を補完する
  projectHistoryList.value = data.value.projectHistoryList.map((project, index) => ({
    ...project,
    projectHistoryNumber: index + 1,
    isOngoing: project.endDate === null, // 終了日なし = 継続中 を復元
  }))
  // 初期表示（プロジェクト未登録状態）では入力欄を1行表示する
  if (projectHistoryList.value.length === 0) {
    addProjectHistory()
  }
  loader.value = false
}

// ユーザーのプロジェクト情報更新関数
async function updateProjectHistoryLit() {
  loader.value = true
  const reqBody = projectHistoryList.value.map(
    ({ projectHistoryNumber, isOngoing, ...project }: ProjectHistoryWithNumber) => ({
      ...project,
      endDate: isOngoing ? null : project.endDate,
    })
  )
  const { error } = await updateProjectHistory({ projectHistoryList: reqBody })
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
  await fetchProjectHistoryLit()
  loader.value = false
  return true
}

// バリデーション
function validateProjectHistory() {
  errors.value = []
  projectHistoryList.value.forEach(
    (projectHistory: ProjectHistoryWithNumber, projectIndex: number) => {
      // 削除対象はスキップ
      if (projectHistory.isDeleted) return
      // 必須
      // 開始年月
      if (!projectHistory.startDate) {
        errors.value.push({
          message: '開始年月は必須です',
          field: 'startDate',
          projectIndex,
        })
      }
      // プロジェクト名
      if (!projectHistory.title) {
        errors.value.push({
          message: 'プロジェクト名は必須です',
          field: 'title',
          projectIndex,
        })
      }
      // 業務概要
      if (!projectHistory.summary) {
        errors.value.push({
          message: '業務概要は必須です',
          field: 'summary',
          projectIndex,
        })
      }

      // 文字数制限
      // プロジェクト名
      const titleResult = validateMaxLengthExceeded(projectHistory.title, 30, 'プロジェクト名')
      if (titleResult.hasError) {
        errors.value.push({
          message: titleResult.errorMessage,
          field: 'title',
          projectIndex,
        })
      }
      // 業務概要
      const summaryResult = validateMaxLengthExceeded(projectHistory.summary, 300, '概要')
      if (summaryResult.hasError) {
        errors.value.push({
          message: summaryResult.errorMessage,
          field: 'summary',
          projectIndex,
        })
      }
      // 開発規模
      const developmentScaleResult = validateOutOfRange(
        projectHistory.developmentScale,
        0,
        9999,
        '開発規模'
      )
      if (developmentScaleResult.hasError) {
        errors.value.push({
          message: developmentScaleResult.errorMessage,
          field: 'developmentScale',
          projectIndex,
        })
      }
      // 全体規模
      const overallScaleResult = validateOutOfRange(
        projectHistory.overallScale,
        0,
        9999,
        '全体規模'
      )
      if (overallScaleResult.hasError) {
        errors.value.push({
          message: overallScaleResult.errorMessage,
          field: 'overallScale',
          projectIndex,
        })
      }
      // サーバ
      const serverResult = validateMaxLengthExceeded(projectHistory.server, 15, 'サーバ')
      if (serverResult.hasError) {
        errors.value.push({
          message: serverResult.errorMessage,
          field: 'server',
          projectIndex,
        })
      }
      // OS
      const osResult = validateMaxLengthExceeded(projectHistory.os, 15, 'OS')
      if (osResult.hasError) {
        errors.value.push({
          message: osResult.errorMessage,
          field: 'os',
          projectIndex,
        })
      }
      // FW・MW・ツール等
      projectHistory.techStacks.forEach((techStack: ProjectTechStack) => {
        const techStackResult = validateMaxLengthExceeded(techStack.name, 20, 'FW・MW・ツール等')
        if (techStackResult.hasError) {
          errors.value.push({
            message: techStackResult.errorMessage,
            field: 'techStacks',
            projectIndex,
          })
        }
      })
      // 使用言語
      projectHistory.languages.forEach((language: ProjectLanguage) => {
        const languageResult = validateMaxLengthExceeded(language.name, 20, '使用言語')
        if (languageResult.hasError) {
          errors.value.push({
            message: languageResult.errorMessage,
            field: 'languages',
            projectIndex,
          })
        }
      })
    }
  )
  if (errors.value.length) {
    return false
  }
  return true
}

function closeDisplayErrorDialog() {
  displayError.value = []
}

// 指定プロジェクト・項目にバリデーションエラーがあるか（該当の入力欄を赤くする用）
function hasFieldError(projectHistoryNumber: number, field: DisplayError['field']): boolean {
  // errors.projectIndex は元配列の0始まりindex。projectHistoryNumberは1始まりなので -1 で対応づける
  return errors.value.some((e) => e.field === field && e.projectIndex === projectHistoryNumber - 1)
}

function addProjectHistory() {
  let newProjectHistory = structuredClone(initProjectHistory)
  newProjectHistory.projectHistoryNumber = projectHistoryList.value.length + 1
  projectHistoryList.value.push(newProjectHistory)
}

function toggleDeleteProjectHistory(phNumber: number) {
  const targetProjectHistory = projectHistoryList.value.find(
    (projectHistory: ProjectHistoryWithNumber) => projectHistory.projectHistoryNumber === phNumber
  )
  if (targetProjectHistory) {
    targetProjectHistory.isDeleted = !targetProjectHistory.isDeleted
  }
}

const techStack = ref<Record<number, string>>({})
function addTechStacks(phNumber: number) {
  const name = techStack.value[phNumber]?.trim()
  if (!name) return
  const targetProjectHistory = projectHistoryList.value.find(
    (projectHistory: ProjectHistoryWithNumber) => projectHistory.projectHistoryNumber === phNumber
  )
  if (!targetProjectHistory) return
  targetProjectHistory.techStacks.push({ id: '', name: name })
  techStack.value[phNumber] = ''
}

const language = ref<Record<number, string>>({})
function addLanguages(phNumber: number) {
  const name = language.value[phNumber]?.trim()
  if (!name) return
  const targetProjectHistory = projectHistoryList.value.find(
    (projectHistory: ProjectHistoryWithNumber) => projectHistory.projectHistoryNumber === phNumber
  )
  if (!targetProjectHistory) return
  targetProjectHistory.languages.push({ id: '', name: name })
  language.value[phNumber] = ''
}

defineExpose({ updateProjectHistoryLit, validateProjectHistory, errors })

await fetchProjectHistoryLit()
</script>

<template>
  <div class="flex justify-end mb-5">
    <button
      class="px-4 py-2 rounded bg-blue-400 text-white cursor-pointer"
      @click="addProjectHistory()"
    >
      プロジェクトの追加 ＋
    </button>
  </div>
  <div class="border border-black max-h-[70vh] overflow-y-auto">
    <div
      class="grid grid-cols-[30px_100px_570px_120px_130px_150px_150px_150px_1fr_40px] sticky top-0 z-10"
    >
      <div class="border border-black bg-slate-200 flex justify-center items-center">No.</div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        期間（稼働）
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        プロジェクト名　業務概要
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        役割　規模
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        サーバ　OS
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">DB</div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        FW・MW<br />ツール等
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">使用言語</div>
      <div class="border border-black flex flex-col">
        <div class="border-b border-black bg-slate-200 flex justify-center items-center h-8">
          作業工程
        </div>
        <div class="grid grid-cols-7 h-full">
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            要件定義
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            基本設計
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            詳細設計
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            実装・単体
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            結合テスト
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            総合テスト
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            保守・運用
          </div>
        </div>
      </div>
      <div class="border border-black bg-slate-200"></div>
    </div>

    <div
      v-for="(item, i) in reversedProjectHistoryList"
      :key="item.projectHistoryNumber"
      class="grid grid-cols-[30px_100px_570px_120px_130px_150px_150px_150px_1fr_40px]"
    >
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        <!-- 逆順表示に合わせてNoを逆算 -->
        {{ projectHistoryList.length - item.projectHistoryNumber + 1 }}
      </div>
      <!-- 期間（稼働） -->
      <div
        class="border border-black p-1 pt-2 min-h-[120px]"
        :class="{ 'soft-deleted': item.isDeleted }"
      >
        <label>
          <input type="checkbox" v-model="item.isOngoing" class="mb-4" :disabled="item.isDeleted" />
          継続中
        </label>
        <input
          v-if="!item.isOngoing"
          type="date"
          v-model="item.endDate"
          class="w-full border-none outline-none shadow-none resize-none mb-4"
          :disabled="item.isDeleted"
        />
        <span v-else class="block w-full flex justify-center items-center mb-4">現在</span>
        <span class="flex justify-center items-center mb-4">↑</span>
        <input
          type="date"
          v-model="item.startDate"
          class="w-full border-none outline-none shadow-none resize-none mb-4"
          :class="{ 'bg-red-100': hasFieldError(item.projectHistoryNumber, 'startDate') }"
          :disabled="item.isDeleted"
        />
      </div>
      <!-- プロジェクト名　業務概要 -->
      <div class="flex flex-col" :class="{ 'soft-deleted': item.isDeleted }">
        <input
          v-model="item.title"
          class="col-span-4 h-10 border border-black px-1 outline-none"
          :class="{ 'bg-red-100': hasFieldError(item.projectHistoryNumber, 'title') }"
          :disabled="item.isDeleted"
        />
        <div
          class="border border-black p-1 min-h-[180px] flex flex-col"
          :class="{ 'soft-deleted': item.isDeleted }"
        >
          <textarea
            v-model="item.summary"
            class="w-full flex-1 border-none outline-none shadow-none resize-none"
            :class="{ 'bg-red-100': hasFieldError(item.projectHistoryNumber, 'summary') }"
            :disabled="item.isDeleted"
          ></textarea>
          <div class="flex justify-end mt-1">
            <button
              type="button"
              class="inline-flex items-center gap-1 whitespace-nowrap text-xs px-2 py-0.5 rounded border border-sky-300 bg-sky-50 text-sky-700 cursor-pointer hover:bg-sky-100 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="loader || !item.summary || item.isDeleted"
              @click="refineSummary(item)"
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
        </div>
      </div>
      <!-- 役割　規模 -->
      <div class="flex flex-col" :class="{ 'soft-deleted': item.isDeleted }">
        <select
          class="min-h-10 border border-black px-1 text-center outline-none"
          v-model="item.role"
          :disabled="item.isDeleted"
        >
          <option value="PG">PG</option>
          <option value="SE">SE</option>
          <option value="PL">PL</option>
          <option value="PM">PM</option>
          <option value="PMO">PMO</option>
        </select>
        <div
          class="border border-black p-1 min-h-[180px] flex flex-col justify-center items-center"
          :class="{ 'soft-deleted': item.isDeleted }"
        >
          <label>開発</label>
          <div class="flex items-center gap-1">
            <input
              type="number"
              v-model="item.developmentScale"
              min="0"
              max="9999"
              class="w-12 text-right"
              :class="{
                'bg-red-100': hasFieldError(item.projectHistoryNumber, 'developmentScale'),
              }"
              :disabled="item.isDeleted"
            />
            名
          </div>
          <label>全体</label>
          <div class="flex items-center gap-1">
            <input
              type="number"
              v-model="item.overallScale"
              min="0"
              max="9999"
              class="w-12 text-right"
              :class="{ 'bg-red-100': hasFieldError(item.projectHistoryNumber, 'overallScale') }"
              :disabled="item.isDeleted"
            />
            名
          </div>
        </div>
      </div>
      <!-- サーバ　OS -->
      <div
        class="border border-black p-1 min-h-[180px] flex flex-col justify-center items-center"
        :class="{ 'soft-deleted': item.isDeleted }"
      >
        <label>サーバ</label>
        <input
          v-model="item.server"
          class="w-full text-center outline-none text-xs"
          :class="{ 'bg-red-100': hasFieldError(item.projectHistoryNumber, 'server') }"
          :disabled="item.isDeleted"
        />
        <label>OS</label>
        <input
          v-model="item.os"
          class="w-full text-center outline-none text-xs"
          :class="{ 'bg-red-100': hasFieldError(item.projectHistoryNumber, 'os') }"
          :disabled="item.isDeleted"
        />
      </div>
      <!-- DB -->
      <label
        class="border border-black p-1 min-h-[180px] flex items-center justify-center cursor-text"
        :class="{ 'soft-deleted': item.isDeleted }"
      >
        <input
          v-model="item.db"
          class="w-full text-center border-none outline-none text-xs"
          :disabled="item.isDeleted"
        />
      </label>
      <!-- FW・MW　ツール等 -->
      <div
        class="border border-black p-1 min-h-[180px] flex flex-col justify-center"
        :class="{
          'soft-deleted': item.isDeleted,
          'bg-red-100': hasFieldError(item.projectHistoryNumber, 'techStacks'),
        }"
      >
        <div class="flex flex-wrap gap-1">
          <!-- TODO: 将来的にコンボボックス（入力可能なプルダウン）に変更する -->
          <input
            v-model="techStack[item.projectHistoryNumber]"
            class="border-2 border-transparent rounded-sm w-full transition hover:bg-slate-100 hover:shadow-sm hover:border-blue-400"
            @keydown.enter.prevent="addTechStacks(item.projectHistoryNumber)"
            :disabled="item.isDeleted"
          />
          <span
            v-for="(techStack, i) in item.techStacks"
            :key="i"
            class="group relative flex w-full items-center justify-center text-sm px-2 py-0.5 rounded-sm hover:bg-slate-100 text-xs"
          >
            {{ techStack.name }}
            <button
              class="absolute right-2 cursor-pointer text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100"
              @click="item.techStacks.splice(i, 1)"
            >
              ×
            </button>
          </span>
        </div>
      </div>
      <!-- 使用言語 -->
      <div
        class="border border-black p-1 min-h-[180px] flex flex-col justify-center"
        :class="{
          'soft-deleted': item.isDeleted,
          'bg-red-100': hasFieldError(item.projectHistoryNumber, 'languages'),
        }"
      >
        <div class="flex flex-wrap gap-1">
          <!-- TODO: 将来的にコンボボックス（入力可能なプルダウン）に変更する -->
          <input
            v-model="language[item.projectHistoryNumber]"
            class="border-2 border-transparent rounded-sm w-full transition hover:bg-slate-100 hover:shadow-sm hover:border-blue-400"
            @keydown.enter.prevent="addLanguages(item.projectHistoryNumber)"
            :disabled="item.isDeleted"
          />
          <span
            v-for="(language, i) in item.languages"
            :key="i"
            class="group relative flex w-full items-center justify-center text-sm px-2 py-0.5 rounded-sm hover:bg-slate-100 text-xs"
          >
            {{ language.name }}
            <button
              class="absolute right-2 cursor-pointer text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100"
              @click="item.languages.splice(i, 1)"
            >
              ×
            </button>
          </span>
        </div>
      </div>
      <!-- 作業工程 -->
      <div class="border border-black flex flex-col" :class="{ 'soft-deleted': item.isDeleted }">
        <div class="grid grid-cols-7 h-full">
          <div class="border-r border-black flex justify-center items-center">
            <input
              type="checkbox"
              v-model="item.hasRequirementsDefinition"
              :disabled="item.isDeleted"
            />
          </div>
          <div class="border-r border-black flex justify-center items-center">
            <input type="checkbox" v-model="item.hasBasicDesign" :disabled="item.isDeleted" />
          </div>
          <div class="border-r border-black flex justify-center items-center">
            <input type="checkbox" v-model="item.hasDetailedDesign" :disabled="item.isDeleted" />
          </div>
          <div class="border-r border-black flex justify-center items-center">
            <input
              type="checkbox"
              v-model="item.hasImplementationUnitTest"
              :disabled="item.isDeleted"
            />
          </div>
          <div class="border-r border-black flex justify-center items-center">
            <input type="checkbox" v-model="item.hasIntegrationTest" :disabled="item.isDeleted" />
          </div>
          <div class="border-r border-black flex justify-center items-center">
            <input type="checkbox" v-model="item.hasSystemTest" :disabled="item.isDeleted" />
          </div>
          <div class="flex justify-center items-center">
            <input
              type="checkbox"
              v-model="item.hasMaintenanceOperation"
              :disabled="item.isDeleted"
            />
          </div>
        </div>
      </div>
      <!-- 削除ボタン・復元ボタン -->
      <div class="border border-black p-1 min-h-[180px] flex items-center justify-center">
        <button
          v-if="
            projectHistoryList.length > 1 &&
            i !== reversedProjectHistoryList.length - 1 &&
            !item.isDeleted
          "
          type="button"
          title="このプロジェクトを削除"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-red-500 text-red-500 transition-colors hover:bg-red-500 hover:text-white cursor-pointer"
          @click="toggleDeleteProjectHistory(item.projectHistoryNumber)"
        >
          <!-- ゴミ箱アイコン -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <button
          v-if="item.isDeleted"
          type="button"
          title="削除を取り消す"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-green-600 text-green-600 transition-colors hover:bg-green-600 hover:text-white cursor-pointer"
          @click="toggleDeleteProjectHistory(item.projectHistoryNumber)"
        >
          <!-- 復元（元に戻す）アイコン -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </button>
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

<style scoped>
.writing-mode-vertical {
  /* 文字を縦書きにする */
  writing-mode: vertical-rl;
  /* ↓英数字とか記号が変な向きにならないために必要 */
  text-orientation: upright;
}

.soft-deleted {
  background: #9ca3af;
}
</style>
