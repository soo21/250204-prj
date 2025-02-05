<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login</h2>

      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-600">아이디</label>
          <input
            id="username"
            type="text"
            v-model="username"
            class="w-full p-2 border border-gray-300 rounded-md mt-2"
            placeholder="아이디"
            required
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-600">비밀번호</label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="w-full p-2 border border-gray-300 rounded-md mt-2"
            placeholder="비밀번호"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-primary-500 text-white p-2 rounded-md hover:bg-primary-600 transition duration-300"
        >
          로그인
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

const login = () => {
  if (username.value && password.value) {
    router.push('/admin/AdminDashboard')
  } else {
    alert('Please enter both username and password')
  }
}
</script>

<style scoped></style>
