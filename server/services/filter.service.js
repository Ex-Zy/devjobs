const { isIncludes } = require("../helpers/index.js");

class FilterService {
  static filterJobsByQuery(jobs, query) {
    const { position = "", location = "", contract = "" } = query;

    return jobs
      .filter((j) => {
        if (
          isIncludes(j.position, position) &&
          isIncludes(j.location, location) &&
          isIncludes(j.contract, contract)
        ) {
          return j;
        } else if (
          isIncludes(j.position, position) ||
          isIncludes(j.location, location) ||
          isIncludes(j.contract, contract)
        ) {
          return j;
        }
        return null;
      })
      .filter((j) => j);
  }
}

module.exports = FilterService;
