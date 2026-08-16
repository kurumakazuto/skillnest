<script setup lang="ts">
// 画面のローダー表示制御
const loader = ref(false)

const userInfo = ref<SignUpInfo>({ email: '', password: '', confirmPassword: '' })
const { signUp } = await useAuth()

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
function isInvalidFormat(id: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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
// メールアドレス
const idError = computed(() => {
  const id = userInfo.value.email
  if (!id) return ''
  if (isInvalidFormat(id)) return 'メールアドレスの形式にしてください'
  if (isUppercaseIncluded(id)) return 'メールアドレスは小文字で入力してください'
  if (isTooLong(id)) return '100文字以内で入力してください'
  return ''
})
// パスワード
const passwordError = computed(() => {
  const password = userInfo.value.password ?? ''
  if (!password) return ''
  if (isTooShort(password)) return '8文字以上で入力してください'
  if (isTooLong(password)) return '100文字以内で入力してください'
  if (isMissingLetterOrNumber(password)) return '英字と数字を両方含めてください'
  if (hasSpace(password)) return 'スペースは使用できません'
  return ''
})
// パスワード（確認用）
const confirmPasswordError = computed(() => {
  const confirmPassword = userInfo.value.confirmPassword ?? ''
  if (!confirmPassword) return ''
  if (isTooShort(confirmPassword)) return '8文字以上で入力してください'
  if (isTooLong(confirmPassword)) return '100文字以内で入力してください'
  if (isMissingLetterOrNumber(confirmPassword)) return '英字と数字を両方含めてください'
  if (hasSpace(confirmPassword)) return 'スペースは使用できません'
  return ''
})

// 登録時チェック
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
  // パスワード（確認用）
  if (!userInfo.value.confirmPassword) {
    displayError.value.push({
      message: 'パスワード(確認用)が未入力です',
    })
  }
  // パスワードとパスワード（確認用）の一致確認
  if (userInfo.value.password !== userInfo.value.confirmPassword) {
    displayError.value.push({
      message: 'パスワードとパスワード(確認用)が一致していません',
    })
  }
  if (!displayError.value.length) {
    createUser()
  }
}

function closeDisplayErrorDialog() {
  displayError.value = []
}

// 登録
// TODO: EnterKeyクリックでも発火するようにする
async function createUser() {
  const reqBody = {
    email: userInfo.value.email,
    password: userInfo.value.password,
    confirmPassword: userInfo.value.confirmPassword,
  }
  const { error } = await signUp(reqBody)
  if (error.value) {
    if (error.value.statusCode === 409) {
      displayError.value.push({ message: '登録済みのメールアドレスです' })
    } else {
      displayError.value.push({ message: '予期しないエラーが発生しました' })
    }
    return
  }
  await navigateTo('/skillSheetPage')
}

// エラーがある場合は作成ボタンは非活性
const hasError = computed(() => {
  return (
    Boolean(idError.value) || Boolean(passwordError.value) || Boolean(confirmPasswordError.value)
  )
})
// 入力がない場合は作成ボタンは非活性
const isFormEmpty = computed(() => {
  return !userInfo.value.email && !userInfo.value.password && !userInfo.value.confirmPassword
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
      <label class="block">パスワード（確認用）</label>
      <input
        type="password"
        placeholder="パスワード（確認用）"
        class="w-full border border-gray-300 bg-white text-gray-900 px-3 py-3 focus:outline-none rounded-xl shadow-md"
        v-model="userInfo.confirmPassword"
        @keydown.enter.prevent="validate()"
      />
      <span class="w-full text-red-500" v-if="confirmPasswordError">{{
        `！ ${confirmPasswordError}`
      }}</span>
    </div>
  </form>
  <div class="text-center mb-12">
    <UiButton label="作成" :disabled="hasError || isFormEmpty" @click="validate()" />
  </div>
  <div class="text-center">
    <NuxtLink
      to="/login"
      class="text-lg hover:text-purple-600 underline underline-offset-4 transition-colors"
      >すでにアカウントをお持ちの方はこちらから</NuxtLink
    >
  </div>
  <UiLoader v-if="loader" />
  <ErrorDisplayErrorDialog
    v-if="displayError.length"
    v-bind:errors="displayError"
    @close="closeDisplayErrorDialog()"
  />
</template>

<style scoped lang="stylus"></style>
