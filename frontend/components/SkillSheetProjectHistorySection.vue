<script setup lang="ts"></script>

<template>
  <div class="border border-black">
    <div class="grid grid-cols-[50px_120px_550px_120px_150px_120px_150px_150px_1fr]">
      <div class="border border-black bg-slate-200 flex justify-center items-center">No.</div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        期間（稼働）
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        プロジェクト名　業務概要
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        役割　規模
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        サーバ　OS
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">DB</div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">
        FW・MW<br />ツール等
      </div>
      <div class="border border-black bg-slate-200 flex justify-center items-center">使用言語</div>
      <div class="border border-black flex flex-col">
        <div class="border-b border-black bg-slate-200 flex justify-center items-center h-8">
          作業工程
        </div>
        <div class="grid grid-cols-7 h-full">
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            要件定義
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            基本設計
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            詳細設計
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            実装・単体
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            結合テスト
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            総合テスト
          </div>
          <div
            class="writing-mode-vertical border-r border-black bg-slate-200 flex justify-center items-center"
          >
            保守・運用
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-[50px_120px_550px_120px_150px_120px_150px_150px_1fr]">
      <div class="border border-black bg-slate-200 flex justify-center items-center">No.</div>
      <!-- 期間（稼働） -->
      <div class="border border-black p-1 min-h-[120px]">
        <textarea class="w-full border-none outline-none shadow-none resize-none"></textarea>
      </div>
      <!-- プロジェクト名　業務概要 -->
      <div class="flex flex-col">
        <input class="col-span-4 border border-black py-2 p-1 outline-none" />
        <div class="border border-black p-1 min-h-[180px]">
          <textarea class="w-full border-none outline-none shadow-none resize-none"></textarea>
        </div>
      </div>
      <!-- 役割　規模 -->
      <div class="flex flex-col">
        <input class="col-span-4 border border-black py-2 p-1 outline-none" />
        <div class="border border-black p-1 min-h-[180px]">
          <textarea class="w-full border-none outline-none shadow-none resize-none"></textarea>
        </div>
      </div>
      <!-- サーバ　OS -->
      <div class="border border-black p-1 min-h-[180px]">
        <textarea class="w-full border-none outline-none shadow-none resize-none"></textarea>
      </div>
      <!-- DB -->
      <div class="border border-black p-1 min-h-[180px]">
        <textarea class="w-full border-none outline-none shadow-none resize-none"></textarea>
      </div>
      <!-- FW・MW　ツール等 -->
      <div class="border border-black p-1 min-h-[180px]">
        <textarea class="w-full border-none outline-none shadow-none resize-none"></textarea>
      </div>
      <!-- 使用言語 -->
      <div class="border border-black p-1 min-h-[180px]">
        <textarea class="w-full border-none outline-none shadow-none resize-none"></textarea>
      </div>
      <!-- 作業工程 -->
      <div class="border border-black flex flex-col">
        <div class="grid grid-cols-7 h-full">
          <input
            class="writing-mode-vertical border-r border-black flex justify-center items-center"
          />
          <input
            class="writing-mode-vertical border-r border-black flex justify-center items-center"
          />
          <input
            class="writing-mode-vertical border-r border-black flex justify-center items-center"
          />
          <input
            class="writing-mode-vertical border-r border-black flex justify-center items-center"
          />
          <input
            class="writing-mode-vertical border-r border-black flex justify-center items-center"
          />
          <input
            class="writing-mode-vertical border-r border-black flex justify-center items-center"
          />
          <input
            class="writing-mode-vertical border-r border-black flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.writing-mode-vertical {
  /* 文字を縦書きにする */
  writing-mode: vertical-rl;
  /* ↓英数字とか記号が変な向きにならないために必要 */
  text-orientation: upright;
}
</style>
