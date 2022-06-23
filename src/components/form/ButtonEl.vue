<script setup></script>

<template>
  <button type="button" class="btn">
    <slot>Default</slot>
  </button>
</template>

<style lang="postcss">
.btn {
  display: inline-block;
  height: 48px;
  position: relative;
  text-align: center;
  padding: 5px 30px;
  color: #fff;
  border-radius: 5px;
  font: 700 16rem/1.2 "Kumbh Sans", sans-serif;
  cursor: pointer;
  transition: background-color 0.25s;
  &:active {
    top: 1px;
  }
}

.btn-primary {
  background-color: var(--button-bg1);
  &:hover {
    background-color: var(--button-bg1-hover);
  }
}

.btn-secondary {
  background-color: var(--button-bg2);
  &:hover {
    background-color: var(--button-bg2-hover);
  }
}

[data-theme="light"] {
  & .btn-secondary {
    color: var(--button-bg1);
  }
}
</style>
