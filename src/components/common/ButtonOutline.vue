<template>
  <button
    class="px-3 py-1 rounded-md transition duration-300 border bg-white"
    :class="[
      `border-${color}-500 text-${color}-500 hover:bg-${color}-${hoverlevel}`,
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
      default: 'primary', // 기본 색상
    },
    hoverlevel: {
      type: Number,
      default: 50, // 기본값 50
    },
    disabled: {
      type: Boolean,
      default: false, // 기본값: 활성화 상태
    },
  },
}
</script>
