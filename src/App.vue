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

<style>
@import url("../node_modules/normalize.css");
@import url("./styles/basic/reset.local.css");
@import url("./styles/basic/colors.css");
@import url("./styles/basic/typography.css");

body {
  background-color: var(--bg-primary);
  color: var(--text-color);
}
</style>
