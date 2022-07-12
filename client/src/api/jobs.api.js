import BaseApi from "@api/base.api.js";

class JobsApi extends BaseApi {
  static async getAll() {
    const data = await this.fetch("/jobs");

    return data;
  }
  static async getById(id) {
    const data = await this.fetch(`/jobs/${id}`);

    return data;
  }
  static async filter(query) {
    const data = await this.fetch(`/jobs?${query}`);

    return data;
  }
}

export default JobsApi;
