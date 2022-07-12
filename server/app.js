const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(cors());
app.use(bodyParser.json());

app.get("/jobs", (req, res) => {
  fs.readFile("./data/db.json", (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Error read file" });
    }

    try {
      const jsonData = JSON.parse(data);

      return res.status(200).send(jsonData.jobs);
    } catch (e) {
      console.log("Error parsing JSON string:", e);
    }
  });
});

app.get("/jobs/:id", (req, res) => {
  fs.readFile("./data/db.json", (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Error read file" });
    }

    try {
      const jsonData = JSON.parse(data);
      const job = jsonData.jobs.find((j) => j.id === +req.params.id);

      if(!job) {
        return res.status(404).send({ message: "Not found" });
      }

      return res.status(200).send(job);
    } catch (e) {
      console.log("Error parsing JSON string:", e);
    }
  });
});

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
