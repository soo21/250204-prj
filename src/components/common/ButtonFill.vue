<template>
  <button
    class="px-3 py-1 rounded-md transition duration-300"
    :class="[
      `bg-${color}-500 hover:bg-${color}-600 text-white`,
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'blue', // 기본 색상
    },
    disabled: {
      type: Boolean,
      default: false, // 기본값: 활성화 상태
    },
  },
}
</script>
