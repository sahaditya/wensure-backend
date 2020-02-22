const User = require("../model/user");

exports.test = (req, res) => {
  res.json({ test: "Welcome to service module" });
};
exports.create_user = (req, res) => {
  let user = new User({ ...req.body });

  user.save(function(err) {
    if (err) {
      console.log("failed to create user", err);
      res.json({ message: "new user creation failed" });
      res.end();
    }
    res.json({ message: "new user createed successfully" });
    res.end();
  });
};
