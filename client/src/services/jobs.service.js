import JobsApi from "@api/jobs.api.js";
import QueryService from "@services/query.service.js";

class JobsService {
  static async filter(params) {
    const serializeParams = QueryService.serializeFilterQuery(params);
    const data = await JobsApi.filter(serializeParams);

    // process unfound result
    if (data.type === "success" && !data.data.length) {
      Object.assign(data, {
        type: "error",
        data: null,
        error: "Jobs not found",
      });
    }

    return data;
  }
}

export default JobsService;
