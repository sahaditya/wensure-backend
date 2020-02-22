const Logger = require("../utils/logger");
const User = require("../model/user");

exports.test = (req, res) => {
  res.json({ test: "Welcome to service module" });
};
exports.create_user = async (req, res) => {
  try {
    Logger.debug("Entered into create_user method");
    const existUser = await User.find({ uid: req.body.uid });
    Logger.debug(existUser);
    if (existUser[0] && existUser[0].uid == req.body.uid) {
      res.json({
        status: 401,
        message: "User aready exist"
      });
      res.end();
      return;
    }
    let user = new User({ ...req.body });
    user.save(function(err) {
      if (err) {
        console.log("failed to create user", err);
        res.json({ message: "new user creation failed" });
        res.end();
      }
      res.json({ message: "new user createed successfully", status: 200 });
      res.end();
      Logger.debug("Exited from create_user method");
    });
  } catch (error) {
    res.json({
      error: true,
      status: 500,
      message: error.message
    });
    Logger.debug("Error happen in create_user method");
    Logger.debug(error);
    res.end();
  }
};
