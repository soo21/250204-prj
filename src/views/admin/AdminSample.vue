<template>
  <div class="">
    <!-- 검색 영역 -->
    <div class="bg-gray-50 p-6 rounded-lg shadow mb-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">데이터ID</label>
          <input
            type="text"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="데이터ID를 입력하세요"
          />
        </div>
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">카탈로그명</label>
          <input
            type="text"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="카탈로그명을 입력하세요"
          />
        </div>
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">프로젝트</label>
          <input
            type="text"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="프로젝트를 입력하세요"
          />
        </div>
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">분양 일시</label>
          <div class="flex gap-2">
            <input
              type="date"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <span class="text-gray-500 self-center">~</span>
            <input
              type="date"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 flex gap-2 justify-end">
        <ButtonFill color="blue">검색</ButtonFill>
        <ButtonOutline color="blue">초기화</ButtonOutline>
      </div>
    </div>

    <!-- 테이블 도구 -->
    <div class="flex justify-between items-center mb-4">
      <select
        class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option>100개씩 보기</option>
        <option>50개씩 보기</option>
        <option>30개씩 보기</option>
      </select>
      <div class="flex gap-2">
        <ButtonFill color="blue">등록</ButtonFill>
        <ButtonOutline color="gray" hoverlevel="100">취소</ButtonOutline>
        <ButtonFill color="secondary">삭제</ButtonFill>
        <ButtonOutline color="primary">수정</ButtonOutline>
        <ButtonOutline color="gray" hoverlevel="100">엑셀 다운로드</ButtonOutline>
        <ButtonOutline color="blue">상세보기</ButtonOutline>
      </div>
    </div>

    <!-- 테이블 -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border">
        <thead>
          <tr class="bg-gray-50">
            <th class="w-12 px-4 py-2 border"><input type="checkbox" /></th>
            <th class="px-4 py-2 border text-left">No</th>
            <th class="px-4 py-2 border text-left">데이터ID</th>
            <th class="px-4 py-2 border text-left">카탈로그ID</th>
            <th class="px-4 py-2 border text-left">제공 대상 프로젝트</th>
            <th class="px-4 py-2 border text-center" colspan="3">유진체 결합</th>
            <th class="px-4 py-2 border text-left">생성일시</th>
          </tr>
          <tr class="bg-gray-50">
            <th class="border"></th>
            <th class="border"></th>
            <th class="border"></th>
            <th class="border"></th>
            <th class="border"></th>
            <th class="px-4 py-2 border text-center">유진체</th>
            <th class="px-4 py-2 border text-center">변이체</th>
            <th class="px-4 py-2 border text-center">오미체</th>
            <th class="border"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i" class="hover:bg-gray-50">
            <td class="px-4 py-2 border"><input type="checkbox" /></td>
            <td class="px-4 py-2 border">{{ i }}</td>
            <td class="px-4 py-2 border">0000{{ i }}</td>
            <td class="px-4 py-2 border">C0000001</td>
            <td class="px-4 py-2 border">PROJ.2</td>
            <td class="px-4 py-2 border text-center">O</td>
            <td class="px-4 py-2 border text-center">X</td>
            <td class="px-4 py-2 border text-center">X</td>
            <td class="px-4 py-2 border">2025-04-16 13:52</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 페이지네이션 -->
    <div class="flex justify-center mt-4">
      <nav class="flex items-center gap-1">
        <button class="p-2 hover:bg-gray-100 rounded">&lt;&lt;</button>
        <button class="p-2 hover:bg-gray-100 rounded">&lt;</button>
        <button class="p-2 bg-teal-600 text-white rounded">1</button>
        <button class="p-2 hover:bg-gray-100 rounded">2</button>
        <button class="p-2 hover:bg-gray-100 rounded">3</button>
        <button class="p-2 hover:bg-gray-100 rounded">4</button>
        <button class="p-2 hover:bg-gray-100 rounded">5</button>
        <button class="p-2 hover:bg-gray-100 rounded">&gt;</button>
        <button class="p-2 hover:bg-gray-100 rounded">&gt;&gt;</button>
      </nav>
    </div>
  </div>
</template>

<script>
import ButtonFill from '@/components/common/ButtonFill.vue'
import ButtonOutline from '@/components/common/ButtonOutline.vue'
export default {
  name: 'AdminSample',
  components: {
    ButtonFill,
    ButtonOutline,
  },
}
</script>
