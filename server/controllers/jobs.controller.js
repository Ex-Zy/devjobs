const JobsService = require("../services/jobs.service.js");
const FilterService = require("../services/filter.service.js");

class JobsController {
  static async getAllJobs(req, res) {
    try {
      const data = await JobsService.getAllJobs();
      const jsonData = JSON.parse(data);

      if (Object.keys(req.query).length) {
        const filteredJobs = FilterService.filterJobsByQuery(
          jsonData.jobs,
          req.query
        );

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
