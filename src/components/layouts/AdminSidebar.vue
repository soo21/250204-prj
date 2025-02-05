<template>
  <aside class="w-60 min-w-60 max-w-60 bg-primary-900 text-white p-6 hidden lg:block">
    <div>
      <ul>
        <!-- 1단계 메뉴 -->
        <li class="mb-4">
          <a href="#" class="block text-lg font-semibold hover:text-primary-300">대시보드</a>
        </li>
        <li class="mb-4">
          <a href="#" class="block text-lg font-semibold hover:text-primary-300">사용자 관리</a>
          <!-- 2단계 메뉴 -->
          <ul class="ml-4 mt-2 space-y-2">
            <li>
              <a href="#" class="hover:text-primary-300">사용자 목록</a>
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <a href="#" class="block text-lg font-semibold hover:text-primary-300">설정</a>
          <!-- 2단계 메뉴 -->
          <ul class="ml-4 mt-2 space-y-2">
            <li>
              <a href="#" class="hover:text-primary-300">프로필 설정</a>
            </li>
            <li>
              <a href="#" class="hover:text-primary-300">시스템 설정</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AdminSidebar',
}
</script>

<style scoped></style>
