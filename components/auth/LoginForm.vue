<script setup lang="ts">
const userInfo = ref<LoginInfo>({ userId: '', password: '' });

watch(
  () => userInfo.value.userId,
  (newVal) => {
    if (newVal && newVal !== newVal.trim()) {
      userInfo.value.userId = newVal.trim();
    }
  }
);

// バリデーション
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isInvalidFormat(id: string) {
  return id && !emailPattern.test(id);
}
function isUppercaseIncluded(id: string) {
  return id && /[A-Z]/.test(id);
}
function isTooShort(item: string) {
  return item && item.length < 8;
}
function isTooLong(item: string) {
  return item && item.length > 100;
}
function isMissingLetterOrNumber(password: string) {
  return password && (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password));
}
function hasSpace(password: string) {
  return /\s/.test(password);
}
// 即時チェック
const idError = computed(() => {
  const id = userInfo.value.userId;
  if (!id) return '';
  if (isInvalidFormat(id)) return 'メールアドレスの形式にしてください';
  if (isUppercaseIncluded(id)) return 'メールアドレスは小文字で入力してください';
  if (isTooLong(id)) return '100文字以内で入力してください';
  return '';
});

const passwordError = computed(() => {
  const password = userInfo.value.password ?? '';
  if (!password) return '';
  if (isTooShort(password)) return '8文字以上で入力してください';
  if (isTooLong(password)) return '100文字以内で入力してください';
  if (isMissingLetterOrNumber(password)) return '英字と数字を両方含めてください';
  if (hasSpace(password)) return 'スペースは使用できません';
  return '';
});

// 送信時チェック
function validate() {
  // 未入力チェック
} // Prettierテスト
</script>

<template>
  <div class="w-96 text-left space-y-5 mb-12">
    <label class="block">ログインID</label>
    <input
      type="text"
      placeholder="メールアドレス"
      class="w-full border border-gray-300 bg-white text-gray-900 px-3 py-3 focus:outline-none rounded-xl shadow-md"
      v-model="userInfo.userId"
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
  <div class="text-center">
    <UiButton label="登録" :disabled="Boolean(idError) || Boolean(passwordError)" />
  </div>
</template>

<style scoped lang="stylus"></style>
