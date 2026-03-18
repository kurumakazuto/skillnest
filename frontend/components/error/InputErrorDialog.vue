<script setup lang="ts">
interface Props {
  errors: Error[]
}
const props = defineProps<Props>()
const emits = defineEmits<{
  close: []
}>()

const ERROR_MESSAGES = [
  'メールアドレスが未入力です。',
  'パスワードが未入力です',
  'パスワード(確認用)が未入力です',
  'パスワードとパスワード(確認用)が一致していません',
]
</script>

<template>
  <div class="fixed inset-0 z-[100] flex justify-center pt-30 pb-40">
    <div class="w-full max-w-2xl rounded-lg border border-black flex flex-col h-full">
      <div
        class="p-[30px] text-2xl font-bold rounded-t-lg bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
      >
        入力エラー
      </div>
      <div
        class="p-[10px] pt-0 flex-1 rounded-b-lg bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-300"
      >
        <!-- ここを縦flexにして高さを持たせる -->
        <div class="border border-black flex flex-col h-full bg-white">
          <!-- エラー一覧（ここが伸びて余白を吸う） -->
          <div class="flex-1 pt-10 pl-5 text-lg space-y-2 overflow-auto">
            <div v-for="(item, i) in props.errors" :key="i">
              <span>・{{ ERROR_MESSAGES[item.index] }}</span>
            </div>
          </div>

          <!-- フッター（常に下） -->
          <div class="p-4 flex justify-end rounded-b-lg bg-gray-100">
            <UiButton label="キャンセル" @click="emits('close')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
