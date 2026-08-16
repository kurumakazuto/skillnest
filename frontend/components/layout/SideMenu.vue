<script setup lang="ts">
// 画面のローダー表示制御
const loader = ref(false)
const displayError = ref<DisplayError[]>([])

const { signOut, deleteAccount } = await useAuth()

const confirmDialog = ref()

async function handleDeleteAccount() {
  loader.value = true
  const { error } = await deleteAccount()
  if (error.value) {
    loader.value = false
    if (error.value.statusCode === 400) {
      displayError.value.push({ message: '入力内容に誤りがあります' })
    } else if (error.value.statusCode === 500) {
      displayError.value.push({ message: 'サーバーエラーが発生しました' })
    } else {
      displayError.value.push({ message: '予期しないエラーが発生しました' })
    }
    return
  }
  loader.value = false
}

function closeDisplayErrorDialog() {
  displayError.value = []
}

// メニューの開閉状態
const isOpen = ref(false)

// 開く
function openMenu() {
  isOpen.value = true
}

// 閉じる
function closeMenu() {
  isOpen.value = false
}

// ESCキーで閉じる
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <!-- ハンバーガーボタン -->
  <button
    class="fixed top-4 left-4 z-50 flex flex-col justify-center gap-1 border border-black bg-slate-200 p-2 cursor-pointer hover:bg-slate-300"
    aria-label="メニューを開く"
    @click="openMenu()"
  >
    <span class="block w-5 h-0.5 bg-black"></span>
    <span class="block w-5 h-0.5 bg-black"></span>
    <span class="block w-5 h-0.5 bg-black"></span>
  </button>

  <!-- 背景オーバーレイ（開いている間だけ表示・クリックで閉じる） -->
  <div v-if="isOpen" class="fixed inset-0 z-40 bg-black/30" @click="closeMenu()"></div>

  <!-- ドロワー本体 -->
  <aside
    class="fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-black flex flex-col transition-transform duration-300"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- ヘッダー -->
    <div class="flex items-center justify-between border-b border-black bg-slate-200 p-2">
      <span>メニュー</span>
      <button
        class="leading-none px-1 cursor-pointer text-slate-500 hover:text-slate-700"
        aria-label="メニューを閉じる"
        @click="closeMenu()"
      >
        ×
      </button>
    </div>

    <!-- メニュー項目エリア（今後追加用） -->
    <nav class="flex-1"></nav>

    <!-- 下部: ログアウト・アカウント削除 -->
    <div class="border-t border-black pb-4">
      <!-- ログアウト -->
      <button
        class="flex w-full items-center justify-between border-b border-black p-2 cursor-pointer hover:bg-slate-100"
        @click="signOut()"
      >
        <span>ログアウト</span>
        <!-- ログアウトアイコン（ドア + 矢印） -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5-5-5m5 5H9"
          />
        </svg>
      </button>
      <!-- アカウント削除 -->
      <button
        class="flex w-full items-center justify-between p-2 text-red-600 cursor-pointer hover:bg-red-50"
        @click="confirmDialog = true"
      >
        <span>アカウント削除</span>
        <!-- ゴミ箱アイコン -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  </aside>
  <UiLoader v-if="loader" />
  <ErrorDisplayErrorDialog
    v-if="displayError.length"
    v-bind:errors="displayError"
    @close="closeDisplayErrorDialog()"
  />
  <UiConfirmDialog
    v-if="confirmDialog"
    title="アカウント削除"
    :message="'アカウントを削除すると元に戻せません。\n本当に削除しますか？'"
    confirm-label="削除する"
    @confirm="handleDeleteAccount()"
    @cancel="confirmDialog = false"
  />
</template>
