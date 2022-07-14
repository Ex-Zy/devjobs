class QueryService {
  static serializeFilterQuery(params) {
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
}

export default QueryService;