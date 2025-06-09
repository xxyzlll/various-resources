<script setup lang="ts">
// 无需引入 HelloWorld
</script>

<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(120deg, #f0f4ff 0%, #e0e7ef 100%);
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
}
</style>
