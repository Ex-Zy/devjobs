<script setup>
import { ref, defineProps } from "vue";
import IconMoon from "../../assets/icons/icon-moon.svg";
import IconSun from "../../assets/icons/icon-sun.svg";

defineProps({
  enableIcons: {
    type: Boolean,
    default: true,
  },
});

const value = ref(true);
</script>

<template>
  <div class="gui-switch">
    <slot name="prefix"><IconSun v-if="enableIcons" /></slot>
    <input type="checkbox" v-model="value" />
    <slot name="postfix"><IconMoon v-if="enableIcons" /></slot>
  </div>
</template>

<style lang="postcss">
@custom-media --motionOK (prefers-reduced-motion: no-preference);

.gui-switch {
  --thumb-size: 16rem;
  --thumb: #5964e0;
  --thumb-highlight: rgba(0, 97, 86, 0.25);

  --track-size: calc(var(--thumb-size) * 2.8);
  --track-padding: 2px;
  --track-inactive: hsl(0, 0%, 100%);
  --track-active: hsl(0, 0%, 100%);

  --thumb-color: var(--thumb);
  --thumb-color-highlight: var(--thumb-highlight);
  --track-color-inactive: var(--track-inactive);
  --track-color-active: var(--track-active);

  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;

  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & input {
    --thumb-position: 0%;
    --thumb-transition-duration: 0.25s;

    padding: var(--track-padding);
    background: var(--track-color-inactive);
    inline-size: var(--track-size);
    block-size: var(--thumb-size);
    border-radius: var(--track-size);

    appearance: none;
    cursor: pointer;
    border: none;
    outline-offset: 5px;
    box-sizing: content-box;

    flex-shrink: 0;
    display: grid;
    align-items: center;
    grid: [track] 1fr / [track] 1fr;

    transition: background-color 0.25s ease;

    &::before {
      content: "";
      grid-area: track;
      inline-size: var(--thumb-size);
      block-size: var(--thumb-size);
      background: var(--thumb-color);
      border-radius: 50%;
      transform: translateX(var(--thumb-position));

      @media (--motionOK) {
        & {
          transition: transform var(--thumb-transition-duration) ease,
            box-shadow 0.25s ease;
        }
      }
    }

    &:checked {
      background: var(--track-color-active);
      --thumb-position: calc((var(--track-size) - 100%));
    }
  }
}
</style>
