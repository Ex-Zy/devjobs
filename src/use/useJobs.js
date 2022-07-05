import JobsApi from "@api/jobs.api.js";
import { onMounted, reactive } from "vue";

export function useJobs() {
  const jobs = reactive([]);

  async function getJobs() {
    const items = await JobsApi.getAll();
    jobs.push(...items);
  }

  onMounted(async () => {
    await getJobs();
  });

  return { jobs };
}
