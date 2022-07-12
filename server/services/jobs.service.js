const fs = require("fs").promises;

class JobsService {
  static async getAllJobs() {
    try {
      const data = await fs.readFile("./database/db.json", "binary");

      return Buffer.from(data);
    } catch (err) {
      throw Error("Error read file");
    }
  }
}

module.exports = JobsService;
