const { resolve } = require("path");

const fs = require("fs").promises;
const path = require('path');

class JobsService {
  static async getAllJobs() {
    try {
      const data = await fs.readFile(
        path.resolve(__dirname, "..", "database", "db.json"),
        "binary"
      );

      return Buffer.from(data);
    } catch (err) {
      throw Error("Error read file");
    }
  }
}

module.exports = JobsService;
