const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./server/routes");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/dist/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/dist/index.html"));
}

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
