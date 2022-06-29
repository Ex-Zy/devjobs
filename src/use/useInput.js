import { reactive, computed } from "vue";

export default function useInput() {
  const state = reactive({
    isHovered: false,
    isFocused: false,
  });

  const classes = computed(() => ({
    "is-focused": state.isFocused,
    "is-hovered": state.isHovered && !state.isFocused,
  }));

  const focus = () => (state.isFocused = true);
  const blur = () => (state.isFocused = false);
  const mouseover = () => (state.isHovered = true);
  const mouseleave = () => (state.isHovered = false);

  return { classes, focus, blur, mouseover, mouseleave };
}
