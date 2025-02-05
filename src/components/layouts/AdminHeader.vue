<template>
  <header class="bg-primary-800 text-white p-4">
    <div class="flex justify-between items-center">
      <div class="text-lg font-semibold">Admin Panel</div>

      <nav>
        <ul class="flex space-x-6">
          <li>
            <a href="#" class="hover:text-primary-300">대시보드</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-300">사용자 관리</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary-300">설정</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AdminHeader',
}
</script>

<style scoped></style>
