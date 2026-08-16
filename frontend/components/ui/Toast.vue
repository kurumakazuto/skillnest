<script setup lang="ts">
interface Props {
  message: string
  duration?: number // 自動で消えるまでの時間(ms)
}
const props = withDefaults(defineProps<Props>(), {
  duration: 3000,
})

// v-modelで表示状態を制御
const show = defineModel<boolean>({ default: false })

// 表示されたら一定時間後に自動で閉じる
let timer: ReturnType<typeof setTimeout> | undefined
watch(show, (val) => {
  if (val) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      show.value = false
    }, props.duration)
  }
})
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <Transition name="toast">
    <div
      v-if="show"
      class="fixed top-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-2 px-5 py-3 rounded-lg bg-green-500 text-white shadow-lg"
    >
      <!-- チェックアイコン -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>{{ message }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -1rem);
}
</style>
