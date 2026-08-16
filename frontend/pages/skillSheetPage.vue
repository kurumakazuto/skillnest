<script setup lang="ts">
const displayError = ref<DisplayError[]>([])
const basicInfoData = ref()
const projectHistoryList = ref()
// 保存成功トーストの表示制御
const showSavedToast = ref(false)

async function updateSkillSheet() {
  const isValidateBasicInfo = basicInfoData.value.$.exposed.validateBasicInfo()
  const isValidateProjectHistory = projectHistoryList.value.$.exposed.validateProjectHistory()
  if (!isValidateBasicInfo || !isValidateProjectHistory) {
    const allErrors = [
      ...basicInfoData.value.$.exposed.errors.value,
      ...projectHistoryList.value.$.exposed.errors.value,
    ]
    displayError.value = allErrors
    return
  }
  const isSavedBasicInfo = await basicInfoData.value.$.exposed.updateBasicInfoData()
  const isSavedProjectHistory = await projectHistoryList.value.$.exposed.updateProjectHistoryLit()
  // 両方成功した時だけトースト表示
  if (isSavedBasicInfo && isSavedProjectHistory) {
    showSavedToast.value = true
  }
}

function closeDisplayErrorDialog() {
  displayError.value = []
}
</script>

<template>
  <header class="max-w-5xl mx-auto pt-5">
    <LayoutSideMenu />
    <h1 class="text-center text-xl">スキルシート</h1>
  </header>
  <main class="px-4 mb-3">
    <div class="flex justify-end mb-3">
      <button
        class="px-4 py-2 rounded bg-green-500 text-white cursor-pointer"
        @click="updateSkillSheet()"
      >
        スキルシートを保存
      </button>
    </div>
    <SkillSheetBasicInfoSection ref="basicInfoData" />
    <SkillSheetProjectHistorySection ref="projectHistoryList" />
    <ErrorDisplayErrorDialog
      v-if="displayError.length"
      v-bind:errors="displayError"
      @close="closeDisplayErrorDialog()"
    />
    <UiToast v-model="showSavedToast" message="保存しました" />
  </main>
</template>
