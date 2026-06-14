<script setup lang="ts">
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
const inputError = ref<any[]>([])
function validate() {
  let error: any
  // 未入力
  // メールアドレス
  const isEmailEmpty = userInfo.value.email
  if (!isEmailEmpty) {
    error = {
      index: 0,
    }
    inputError.value.push(error)
  }
  // パスワード
  const isPasswordEmpty = userInfo.value.password
  if (!isPasswordEmpty) {
    error = {
      index: 1,
    }
    inputError.value.push(error)
  }
  if (!inputError.value.length) {
    loginUser()
  }
}

async function loginUser() {
  const reqBody = {
    email: userInfo.value.email,
    password: userInfo.value.password,
  }
  const { error } = await signIn(reqBody)
  if (error.value) {
    alert('メールアドレスかパスワードが間違っています。')
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
      type="text"
      placeholder="パスワード"
      class="w-full border border-gray-300 bg-white text-gray-900 px-3 py-3 focus:outline-none rounded-xl shadow-md"
      v-model="userInfo.password"
    />
    <span class="w-full text-red-500" v-if="passwordError">{{ `！ ${passwordError}` }}</span>
  </div>
  <div class="text-center mb-12">
    <UiButton label="ログイン" :disabled="hasError || isFormEmpty" @click="validate()" />
  </div>
  <div class="text-center">
    <NuxtLink
      to="/signUp"
      class="text-lg hover:text-purple-600 underline underline-offset-4 transition-colors"
      >アカウントをお持ちでない方はこちらから</NuxtLink
    >
  </div>
</template>

<style scoped lang="stylus"></style>
