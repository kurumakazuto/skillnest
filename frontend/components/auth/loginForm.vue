<script setup lang="ts">
// 画面のローダー表示制御
const loader = ref(false)

const userInfo = ref<LoginInfo>({ email: '', password: '' })
const { signIn } = await useAuth()
// ログインIDの前後の余分な空白を削除
watch(
  () => userInfo.value.email,
  (newVal) => {
    if (newVal && newVal !== newVal.trim()) {
      userInfo.value.email = newVal.trim()
    }
  }
)

// バリデーション
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
function isInvalidFormat(id: string) {
  return id && !emailPattern.test(id)
}
function isUppercaseIncluded(id: string) {
  return id && /[A-Z]/.test(id)
}
function isTooShort(item: string) {
  return item && item.length < 8
}
function isTooLong(item: string) {
  return item && item.length > 100
}
function isMissingLetterOrNumber(password: string) {
  return password && (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password))
}
function hasSpace(password: string) {
  return /\s/.test(password)
}
// 即時チェック
// TODO: エラーメッセージ用のフィアルを作成し、エラー文は定数化しておいた方が良い。
const idError = computed(() => {
  const id = userInfo.value.email
  if (!id) return ''
  if (isInvalidFormat(id)) return 'メールアドレスの形式にしてください'
  if (isUppercaseIncluded(id)) return 'メールアドレスは小文字で入力してください'
  if (isTooLong(id)) return '100文字以内で入力してください'
  return ''
})

const passwordError = computed(() => {
  const password = userInfo.value.password ?? ''
  if (!password) return ''
  if (isTooShort(password)) return '8文字以上で入力してください'
  if (isTooLong(password)) return '100文字以内で入力してください'
  if (isMissingLetterOrNumber(password)) return '英字と数字を両方含めてください'
  if (hasSpace(password)) return 'スペースは使用できません'
  return ''
})

// 送信時チェック
const displayError = ref<DisplayError[]>([])
function validate() {
  // 未入力
  // メールアドレス
  if (!userInfo.value.email) {
    displayError.value.push({
      message: 'メールアドレスが未入力です。',
    })
  }
  // パスワード
  if (!userInfo.value.password) {
    displayError.value.push({
      message: 'パスワードが未入力です',
    })
  }
  if (!displayError.value.length) {
    loginUser()
  }
}

function closeDisplayErrorDialog() {
  displayError.value = []
}

async function loginUser() {
  const reqBody = {
    email: userInfo.value.email,
    password: userInfo.value.password,
  }
  const { error } = await signIn(reqBody)
  if (error.value) {
    displayError.value.push({
      message: 'メールアドレスかパスワードが間違っています。',
    })
    return
  }
  await navigateTo('/skillSheetPage')
}

// エラーがある場合は作成ボタンは非活性
const hasError = computed(() => {
  return Boolean(idError.value) || Boolean(passwordError.value)
})
// 入力がない場合は作成ボタンは非活性
const isFormEmpty = computed(() => {
  return !userInfo.value.email && !userInfo.value.password
})
</script>

<template>
  <form @submit.prevent="validate">
    <div class="w-96 text-left space-y-5 mb-12">
      <label class="block">メールアドレス</label>
      <input
        type="text"
        placeholder="メールアドレス"
        class="w-full border border-gray-300 bg-white text-gray-900 px-3 py-3 focus:outline-none rounded-xl shadow-md"
        v-model="userInfo.email"
        :class="[idError ? 'border-red-500' : '']"
      />
      <span class="w-full text-red-500" v-if="idError">{{ `！ ${idError}` }}</span>
      <label class="block">パスワード</label>
      <input
        type="password"
        placeholder="パスワード"
        class="w-full border border-gray-300 bg-white text-gray-900 px-3 py-3 focus:outline-none rounded-xl shadow-md"
        v-model="userInfo.password"
      />
      <span class="w-full text-red-500" v-if="passwordError">{{ `！ ${passwordError}` }}</span>
    </div>
    <div class="text-center mb-12">
      <UiButton label="ログイン" :disabled="hasError || isFormEmpty" />
    </div>
  </form>
  <div class="text-center">
    <NuxtLink
      to="/signUp"
      class="text-lg hover:text-purple-600 underline underline-offset-4 transition-colors"
      >アカウントをお持ちでない方はこちらから</NuxtLink
    >
  </div>
  <UiLoader v-if="loader" />
  <ErrorDisplayErrorDialog
    v-if="displayError.length"
    v-bind:errors="displayError"
    @close="closeDisplayErrorDialog()"
  />
</template>
