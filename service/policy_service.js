const Policy = require("../model/policy");

exports.create_policy = (req, res) => {
  let policy = new Policy({ ...req.body });

  policy.save(function(err, doc) {
    if (err) {
      console.log("failed to create policy", err);
      res.json({ message: "new policy creation failed" });
      res.end();
    }
    res.json({ message: "new policy createed successfully" });
    res.end();
  });
};
