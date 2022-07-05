import { computed, ref, watch } from "vue";

export function useLoadMoreJobs(jobs) {
  const visibleJobs = ref([]);
  const showCount = ref(8);
  const step = ref(4);

  watch(jobs, () => {
    updateVisibleJobs(showCount.value);
  });

  const isVisibleLoadButton = computed(() => showCount.value < jobs.length);

  function updateVisibleJobs(count) {
    visibleJobs.value = jobs.slice(0, count);
  }

  function updateShowCount() {
    showCount.value = visibleJobs.value.length;
  }

  function loadMoreJobs() {
    const count = visibleJobs.value.length + step.value;

    updateVisibleJobs(count);
    updateShowCount();
  }

  return { visibleJobs, isVisibleLoadButton, loadMoreJobs };
}
