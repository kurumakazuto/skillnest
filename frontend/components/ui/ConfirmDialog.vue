<script setup lang="ts">
interface Props {
  title?: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
}
withDefaults(defineProps<Props>(), {
  title: '確認',
  confirmLabel: 'OK',
  cancelLabel: 'キャンセル',
})

const emits = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 p-4">
    <!-- ダイアログ本体 -->
    <div class="w-full max-w-md rounded-lg border border-black flex flex-col">
      <!-- ヘッダー -->
      <div
        class="p-5 text-xl font-bold rounded-t-lg bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
      >
        {{ title }}
      </div>

      <!-- 本文 -->
      <div class="p-[10px] rounded-b-lg bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-300">
        <div class="border border-black bg-white">
          <!-- メッセージ -->
          <div class="p-5 text-lg whitespace-pre-line">
            {{ message }}
          </div>

          <!-- フッター -->
          <div class="p-4 flex justify-end gap-3 bg-gray-100">
            <button
              class="text-lg px-8 py-2 border border-black rounded-3xl cursor-pointer hover:bg-gray-200"
              @click="emits('cancel')"
            >
              {{ cancelLabel }}
            </button>
            <UiButton :label="confirmLabel" @click="emits('confirm')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
