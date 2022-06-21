<script setup></script>

<template>
  <button type="button" class="btn">
    <slot>Default</slot>
  </button>
</template>

<style>
.btn {
  display: inline-block;
  text-align: center;
  padding: 16px 30px;
  background-color: var(--primary-color);

  border-radius: 5px;
  color: #fff;
  font: 700 16rem/1.2 "Kumbh Sans", sans-serif;
}
</style>
