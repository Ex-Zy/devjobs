<script setup>
defineProps({
  enableIcons: {
    type: Boolean,
    default: true,
  },
  checked: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:checked"]);
const change = (val) => emit("update:checked", val);
</script>

<template>
  <label class="gui-switch">
    <slot name="prefix">
      <div v-if="enableIcons" @click="change(false)" class="gui-switch__icon">
        <SvgIcon name="sun" class="icon-sun" />
      </div>
    </slot>
    <input
      type="checkbox"
      v-bind="{ checked }"
      @change="change($event.target.checked)"
    />
    <slot name="postfix">
      <div v-if="enableIcons" @click="change(true)" class="gui-switch__icon">
        <SvgIcon name="moon" class="icon-moon" />
      </div>
    </slot>
  </label>
</template>

<style lang="postcss">
@custom-media --motionOK (prefers-reduced-motion: no-preference);

.gui-switch {
  --thumb-size: 14rem;
  --thumb: #5964e0;
  --thumb-highlight: rgba(0, 97, 86, 0.25);

  --track-size: calc(var(--thumb-size) * 2.7);
  --track-padding: 5px;
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
  &__icon {
    display: grid;
    align-items: center;
  }
}
</style>
