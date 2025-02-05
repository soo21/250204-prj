<template>
  <footer class="admin-footer">
    <div class="">
      <p class="copyright">&copy; {{ currentYear }} Your Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AdminFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
