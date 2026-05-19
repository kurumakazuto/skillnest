<script setup lang="ts">
const qualifications = ref(
  Array.from({ length: 7 }, () => ({
    year: '',
    month: '',
    name: '',
  }))
)
</script>

<template>
  <div class="mb-5 border border-black">
    <!-- １行目 -->
    <div class="grid grid-cols-12">
      <div class="col-span-1 border border-black bg-slate-200 p-1">ふりがな</div>
      <input class="col-span-4 border border-black p-1 outline-none" />

      <div class="col-span-1 border border-black bg-slate-200 p-1">性別</div>
      <select class="col-span-1 border border-black p-1">
        <option value="male">男</option>
        <option value="female">女</option>
      </select>

      <div class="col-span-1 border border-black bg-slate-200 p-1">年齢</div>
      <!-- TODO: 生年月日入力すると自動で年齢表示されるようにする -->
      <div class="col-span-1 border border-black p-1">28</div>

      <div class="col-span-1 border border-black bg-slate-200 p-1">生年月日</div>
      <input type="date" class="col-span-2 border border-black p-1" />
    </div>
    <!-- ２行目 -->
    <div class="grid grid-cols-12">
      <div class="col-span-1 border border-black bg-slate-200 p-1">氏名</div>
      <input class="col-span-4 border border-black p-1 outline-none" />
      <div class="col-span-1 border border-black bg-slate-200 p-1 outline-none">国籍</div>
      <input class="col-span-1 border border-black p-1" />
      <div class="col-span-1 border border-black bg-slate-200 p-1">配偶者</div>
      <select class="col-span-1 border border-black p-1">
        <option value="male">無し</option>
        <option value="female">有り</option>
      </select>
      <div class="col-span-1 border border-black bg-slate-200 p-1">最寄駅</div>
      <input class="col-span-2 border border-black p-1 outline-none" />
    </div>
    <div class="grid grid-cols-12">
      <!-- 経験技術ラベル -->
      <div class="col-span-1 border border-black bg-slate-200 p-1">経験技術</div>

      <!-- 経験技術入力 -->
      <div class="col-span-8 border border-black p-1">
        <textarea class="w-full h-18 border-none outline-none shadow-none resize-none"></textarea>
      </div>

      <!-- 右：資格欄 -->
      <div class="col-span-3 row-span-3 max-h-[260px] overflow-y-auto">
        <div class="grid grid-cols-12">
          <div class="col-span-4 border border-black bg-slate-200 p-1">取得年月</div>
          <div class="col-span-8 border border-black bg-slate-200 p-1">資格</div>
        </div>

        <div
          v-for="(qualification, index) in qualifications"
          :key="index"
          class="grid grid-cols-12"
        >
          <div class="col-span-4 border border-black p-1">
            <input type="month" class="w-full outline-none" />
          </div>
          <div class="col-span-8 border border-black p-1">
            <input class="w-full outline-none" />
          </div>
        </div>
      </div>
      <!-- 4行目 -->
      <div class="col-span-1 border border-black bg-slate-200 p-1">得意分野</div>
      <div class="col-span-8 border border-black p-1">
        <textarea class="w-full border-none outline-none shadow-none resize-none"></textarea>
      </div>

      <!-- 5行目 -->
      <div class="col-span-1 border border-black bg-slate-200 p-1">自己PR</div>
      <div class="col-span-8 border border-black p-1 min-h-[120px]">
        <textarea class="w-full border-none outline-none shadow-none resize-none"></textarea>
      </div>
    </div>
  </div>
</template>
