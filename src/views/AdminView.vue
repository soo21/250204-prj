<template>
  <div class="admin-layout">
    <AdminHeader />

    <div class="admin-body">
      <AdminSidebar />
      <main class="admin-content">
        <AdminContentTop />
        <RouterView />
        <AdminFooter />
      </main>
    </div>
  </div>
</template>

<script setup>
import AdminHeader from '@/components/layouts/AdminHeader.vue'
import AdminSidebar from '@/components/layouts/AdminSidebar.vue'
import AdminContentTop from '@/components/layouts/AdminContentTop.vue'
import AdminFooter from '@/components/layouts/AdminFooter.vue'
</script>

<style scoped>
.admin-layout {
  @apply flex flex-col w-full;
}
.admin-content {
  @apply flex flex-col w-full p-8;
}
.admin-body {
  height: calc(100vh - 60px);
  @apply flex;
}
.admin-footer {
  width: calc(100% - 15rem);
  @apply fixed bottom-0 px-4 py-2 bg-slate-200 text-gray-400 text-xs text-end;
}
</style>
