import JobsApi from "@api/jobs.api.js";
import FilterModel from "@models/filter.model.js";
import { lowerCase, arrayStringToLowerCase } from "@helpers/index.js";

const filterByModelValue = (
  { keyWord, location, isFulltime } = new FilterModel()
) => {
  const CONDITIONS = {
    ALL: !!(keyWord.length && location.length && isFulltime),
    KEYWORD_AND_LOCATION: !!(keyWord.length && location.length),
    KEYWORD_OR_LOCATION: !!(keyWord || location),
    FULLTIME: isFulltime,
  };

  return (job) => {
    const values = arrayStringToLowerCase(job);
    const ACTIONS = {
      ALL: () =>
        values.includes(
          lowerCase(keyWord) && lowerCase(location) && lowerCase("Full Time")
        ),
      KEYWORD_AND_LOCATION: () =>
        values.includes(lowerCase(keyWord) && lowerCase(location)),
      KEYWORD_OR_LOCATION: () =>
        values.includes(lowerCase(keyWord) || lowerCase(location)),
      FULLTIME: () => values.includes(lowerCase("Full Time")),
    };

    const active = Object.keys(CONDITIONS).find((key) => CONDITIONS[key]);

    return ACTIONS[active]();
  };
};

export default class JobsService {
  static async filter(model = new FilterModel()) {
    const jobs = await JobsApi.getAll();
    const foundedJobs = jobs.filter(filterByModelValue(model));

    return foundedJobs;
  }
}
