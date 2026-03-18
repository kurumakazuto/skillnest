<script setup lang="ts">
// propsを定義
interface Props {
  label: string
  disabled?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <button
    class="inline-block whitespace-nowrap text-lg px-10 py-2 bg-black text-white rounded-3xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="props.disabled"
  >
    {{ props.label }}
  </button>
</template>

<style scoped lang="stylus"></style>
