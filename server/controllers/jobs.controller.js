const JobsService = require("../services/jobs.service.js");
const { isIncludes } = require("../helpers");

const getFilteredJobsByQuery = (jobs, query) => {
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
};

class JobsController {
  static async getAllJobs(req, res) {
    try {
      const data = await JobsService.getAllJobs();
      const jsonData = JSON.parse(data);

      if (Object.keys(req.query).length) {
        const filteredJobs = getFilteredJobsByQuery(jsonData.jobs, req.query);

        return res.status(200).send(filteredJobs);
      }

      return res.status(200).send(jsonData.jobs);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
  static async getOneJob(req, res) {
    try {
      const data = await JobsService.getAllJobs();
      const jsonData = JSON.parse(data);
      const job = jsonData.jobs.find((j) => j.id === +req.params.id);

      if (!job) {
        return res.status(404).send({ message: "Not found" });
      }

      return res.status(200).send(job);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
}

module.exports = JobsController;
