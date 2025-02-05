import { createRouter, createWebHistory } from 'vue-router'
import AdminView from '@/views/AdminView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'
import AdminSample from '@/views/admin/AdminSample.vue'
import AdminSample2 from '@/views/admin/AdminSample2.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  {
    path: '/admin',
    component: AdminView,
    children: [
      { path: 'AdminDashboard', component: AdminDashboard },
      { path: 'AdminSample', component: AdminSample },
      { path: 'AdminSample2', component: AdminSample2 },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
