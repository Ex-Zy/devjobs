<script setup>
import { onMounted } from "vue";
import HeaderApp from "./components/HeaderApp.vue";

onMounted(() => {
  document.documentElement.setAttribute("data-theme", "dark");
});
</script>

<template>
  <HeaderApp />
  <router-view></router-view>
</template>

<style lang="postcss">
html,
body {
  height: 100%;
}

body {
  background-color: var(--page-bg);
  color: var(--text-color);
}
</style>
