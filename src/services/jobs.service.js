import JobsApi from "@api/jobs.api.js";
import FilterModel from "@models/filter.model.js";
import { lowerCase, arrayStringToLowerCase } from "@helpers/index.js";
import { isEmptyString } from "../helpers";

// conditions for filtering
const getFilterConditions = ({ keyWord, location, isFulltime }) => ({
  ALL: !!(keyWord.length && location.length && isFulltime),
  KEYWORD_AND_LOCATION: !!(keyWord.length && location.length),
  KEYWORD_OR_LOCATION: !!(keyWord || location),
  FULLTIME: isFulltime,
});

// how to filter specific filter conditions
const getFilterActions =
  (values) =>
  ({ keyWord, location, contract }) => ({
    ALL: () =>
      values.includes(lowerCase(keyWord)) &&
      values.includes(lowerCase(location)) &&
      values.includes(lowerCase(contract)),
    KEYWORD_AND_LOCATION: () =>
      values.includes(lowerCase(keyWord)) &&
      values.includes(lowerCase(location)),
    KEYWORD_OR_LOCATION: () =>
      values.includes(lowerCase(keyWord)) ||
      values.includes(lowerCase(location)),
    FULLTIME: () => values.includes(lowerCase(contract)),
  });

const filterHandler = ({ keyWord, location, isFulltime }) => {
  const CONDITIONS = getFilterConditions({ keyWord, location, isFulltime });

  return (job) => {
    const transformObjValues = arrayStringToLowerCase(job);
    const ACTIONS = getFilterActions(transformObjValues)({
      keyWord,
      location,
      contract: "Full Time",
    });
    const active = Object.keys(CONDITIONS).find((key) => CONDITIONS[key]);

    return ACTIONS[active]();
  };
};

const isEmptyFilterModel = ({ keyWord, location, isFulltime }) => {
  return isEmptyString(keyWord) && isEmptyString(location) && !isFulltime;
};

export default class JobsService {
  static async filter(model = new FilterModel()) {
    // prevent filtering without data
    if (isEmptyFilterModel(model)) return;

    const jobs = await JobsApi.getAll();
    const foundedJobs = jobs.filter(filterHandler(model));

    return foundedJobs;
  }
}
