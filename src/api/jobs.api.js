import Api from "@api/api.js";

class JobsApi extends Api {
  static async getAll() {
    const data = await this.fetch("/jobs");

    return data;
  }
  static async getById(id) {
    const data = await this.fetch(`/jobs/${id}`);

    return data;
  }
}

export default JobsApi;
