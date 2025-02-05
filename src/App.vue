<template>
  <RouterView />
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute() // 현재 경로 정보를 가져옴
</script>

<style scoped></style>
