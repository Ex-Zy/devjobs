<script setup>
defineProps({
  jobs: { type: Array, default: () => [] },
});
</script>

<template>
  <div>
    <pre>{{ jobs }}</pre>
  </div>
</template>
