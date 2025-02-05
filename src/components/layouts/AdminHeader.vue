<template>
  <header class="bg-white text-primary-900 h-[60px]">
    <div class="flex items-center">
      <div class="header-logo">Admin Panel</div>
      <div class="flex justify-between items-center w-full h-[60px]">
        <div class="flex items-center">
          <button
            class="h-[60px] bg-white text-primary-900 px-4 hover:bg-primary-50 transition duration-300"
          >
            <Icon name="Bars3Icon" class="heroicon-8" />
          </button>
          <nav>
            <ul class="flex space-x-4 text-primary-800 font-medium">
              <li></li>
              <li>
                <a
                  href="/admin/AdminDashboard"
                  class="hover:text-primary-300 transition duration-300"
                  >대시보드</a
                >
              </li>
              <li>
                <a href="/admin/AdminSample" class="hover:text-primary-300 transition duration-300"
                  >사용자 관리</a
                >
              </li>
              <li>
                <a href="/admin/AdminSample2" class="hover:text-primary-300 transition duration-300"
                  >설정</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="text-sm px-4">
          <nav>
            <ul class="flex gap-2 items-center text-primary-800 font-medium">
              <li></li>
              <li>
                <div className="relative w-full max-w-xl pr-2">
                  <div className="relative">
                    <div
                      className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
                    >
                      <Icon name="MagnifyingGlassIcon" class="heroicon-5 me-1 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full py-2 pl-10 pr-4 bg-secondary-50 text-primary-800 placeholder-gray-400 rounded-full border-0 focus:outline-none"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="/admin/AdminSample"
                  class="flex items-center px-3 py-2 rounded-md transition duration-300 hover:bg-primary-50"
                  ><Icon name="UserCircleIcon" class="heroicon-5 me-1" />사용자</a
                >
              </li>
              <li>
                <a
                  href="/admin/AdminSample2"
                  class="flex items-center px-3 py-2 rounded-md transition duration-300 hover:bg-primary-50"
                  ><Icon name="ArrowRightStartOnRectangleIcon" class="heroicon-5 me-1" />로그아웃</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Icon from '@/components/icons/IconHeroicons.vue'

export default {
  components: {
    Icon,
  },
}
</script>

<style scoped></style>
