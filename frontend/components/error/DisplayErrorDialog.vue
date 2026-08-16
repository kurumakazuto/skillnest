<script setup lang="ts">
interface Props {
  errors: DisplayError[]
}
const props = defineProps<Props>()
const emits = defineEmits<{
  close: []
}>()

const uniqueErrorMessages = computed(() => [...new Set(props.errors.map((e) => e.message))])
</script>

<template>
  <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <div class="w-full max-w-2xl rounded-lg border border-black flex flex-col">
      <div
        class="p-[30px] text-2xl font-bold rounded-t-lg bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
      >
        入力エラー
      </div>
      <div
        class="p-[10px] pt-0 rounded-b-lg bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-300"
      >
        <div class="border border-black flex flex-col bg-white">
          <!-- エラー一覧（行数分だけ高さが伸びる。多すぎる時だけスクロール） -->
          <div class="p-5 text-lg space-y-2 max-h-[60vh] overflow-auto">
            <div v-for="(message, m) in uniqueErrorMessages" :key="m">
              <span>・{{ message }}</span>
            </div>
          </div>

          <!-- フッター -->
          <div class="p-4 flex justify-end bg-gray-100">
            <UiButton label="OK" @click="emits('close')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
