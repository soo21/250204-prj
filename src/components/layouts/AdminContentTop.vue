<template>
  <div class="breadcrumbs-container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/AdminDashboard"><Icon name="HomeIcon" class="heroicon-4" /></a>
          <Icon name="ChevronRightIcon" class="heroicon-4" />
        </li>
        <li class="breadcrumb-item">
          <a href="/AdminSample">AdminSample</a>
          <Icon name="ChevronRightIcon" class="heroicon-4" />
        </li>
        <li class="breadcrumb-item">
          <a href="/AdminSample">AdminSample</a>
          <Icon name="ChevronRightIcon" class="heroicon-4" />
        </li>
        <li class="breadcrumb-item active" aria-current="page">Detail Page</li>
      </ol>
    </nav>
    <h2 class="text-xl font-bold mb-4">프로젝트별 사용자 조회</h2>
  </div>
</template>

<script>
import Icon from '@/components/icons/IconHeroicons.vue'

export default {
  components: {
    Icon,
  },
}
</script>

<style scoped>
.breadcrumb {
  @apply mb-2 flex items-center gap-1 text-gray-400 text-sm;
}
</style>
