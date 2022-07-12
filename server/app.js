const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
