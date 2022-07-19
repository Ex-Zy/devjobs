const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./server/routes");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/server/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) =>
    res.sendFile(__dirname + "/server/public/index.html")
  );
}

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`App listening on port:${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
