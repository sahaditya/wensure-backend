const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const dbConfig = require("./config/db_config.js");
const CONSTANT = require("./utils/constants");
const routes = require("./routes/api_router");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use(bodyParser.urlencoded({ extende: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcom to devengers hacknight :)" });
});

app.use("/api", routes);

app.listen(8081, () => {
  console.log("Listening on port: 8081");
});
