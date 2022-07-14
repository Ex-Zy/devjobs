import { ref, watch } from "vue";

export default function useModal() {
  const isOpenModal = ref(false);

  watch(isOpenModal, () => {
    isOpenModal.value
      ? document.body.classList.add("is-lock-scroll")
      : document.body.classList.remove("is-lock-scroll");
  });

  return { isOpenModal };
}
