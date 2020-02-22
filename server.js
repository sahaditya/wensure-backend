const express = require("express");
const CONSTANT = require("./utils/constants");
const bodyParser = require("body-parser");
const app = express();
const dbConfig = require("./config/db_config.js");
const mongoose = require("mongoose");

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
//app.use(express.json());
// Connecting to the database

app.get("/", (req, res) => {
  res.json({ message: "Welcom to node server of blogging application" });
});
app.use("/blog", user_post_route);

console.log(CONSTANT.PORT_NO);
app.listen(8081, () => {
  console.log("Listening on port ");
});
