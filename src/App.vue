<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.documentElement.setAttribute("data-theme", "light");
});
</script>

<template>
  <h1>First app</h1>
  <div>
    <router-link to="/">Go to Home</router-link> &nbsp;
    <router-link to="/jobs">Go to Jobs</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="pcss">
body {
  background-color: var(--page-bg);
  color: var(--text-color);
}
</style>
