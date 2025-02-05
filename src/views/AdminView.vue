<template>
  <div class="admin-layout">
    <AdminHeader />

    <div class="admin-body">
      <AdminSidebar />
      <main class="admin-content">
        <RouterView />
        <AdminFooter />
      </main>
    </div>
  </div>
</template>

<script setup>
import AdminHeader from '@/components/layouts/AdminHeader.vue'
import AdminSidebar from '@/components/layouts/AdminSidebar.vue'
import AdminFooter from '@/components/layouts/AdminFooter.vue'
</script>
<style scoped>
.admin-layout,
.admin-content {
  @apply flex flex-col;
}
.admin-body {
  @apply flex;
}
</style>
