import JobsApi from "@api/jobs.api.js";

class JobsService {
  static async filter(params) {
    const serializeParams = getSerializeParams(params);
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

function getSerializeParams(params) {
  const { location, position, isFulltime } = params;
  const query = new URLSearchParams();

  if (location.trim() !== "") {
    query.append("location", location);
  }

  if (position.trim() !== "") {
    query.append("position", position);
  }

  if (isFulltime) {
    query.append("contract", "Full Time");
  }

  return query.toString();
}

export default JobsService;
