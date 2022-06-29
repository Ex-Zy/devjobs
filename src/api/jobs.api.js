export default class JobsApi {
  static async getAll() {
    const response = await fetch("../../data/data.json");
    const jobs = await response.json();

    return jobs;
  }
  static async getById(id) {
    const jobs = await JobsApi.getAll();
    const job = jobs.find((j) => j.id === id);

    return job;
  }
}
