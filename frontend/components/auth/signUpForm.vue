<script setup lang="ts">
const userInfo = ref<SignUpInfo>({ email: '', password: '', confirmPassword: '' })

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
  // パスワード（確認用）
  const isConfirmPasswordEmpty = userInfo.value.confirmPassword
  if (!isConfirmPasswordEmpty) {
    error = {
      index: 2,
    }
    inputError.value.push(error)
  }
  // パスワードとパスワード（確認用）の一致確認
  if (userInfo.value.password !== userInfo.value.confirmPassword) {
    error = {
      index: 3,
    }
    inputError.value.push(error)
  }
  if (!inputError.value.length) {
    createUser()
  }
}

// エラーダイアログを閉じる
function closeDialog() {
  inputError.value = []
}

// 登録
// TODO: EnterKeyクリックでも発火するようにする
async function createUser() {
  const reqBody = {
    email: userInfo.value.email,
    password: userInfo.value.password,
    confirmPassword: userInfo.value.confirmPassword,
  }
  const { data, error } = await useAuth().signUp(reqBody)
  if (data.value?.success) {
    // メインページへ遷移し、トースト表示
  }
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
    <label class="block">パスワード（確認用）</label>
    <input
      type="text"
      placeholder="パスワード（確認用）"
      class="w-full border border-gray-300 bg-white text-gray-900 px-3 py-3 focus:outline-none rounded-xl shadow-md"
      v-model="userInfo.confirmPassword"
    />
    <span class="w-full text-red-500" v-if="confirmPasswordError">{{
      `！ ${confirmPasswordError}`
    }}</span>
  </div>
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
  <ErrorInputErrorDialog v-if="inputError.length" v-bind:errors="inputError" @close="closeDialog" />
</template>

<style scoped lang="stylus"></style>
