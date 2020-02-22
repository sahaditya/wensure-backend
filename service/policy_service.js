const Logger = require("../utils/logger");
const Policy = require("../model/policy");

exports.create_policy = (req, res) => {
  Logger.debug("Entered into create_policy method");
  let policy = new Policy({ ...req.body });

  policy.save(function(err, doc) {
    if (err) {
      console.log("failed to create policy", err);
      res.json({ message: "new policy creation failed" });
      res.end();
    }
    res.json({ message: "new policy createed successfully" });
    res.end();
    Logger.debug("Exited from create_policy method");
  });
};

exports.get_policy = async (req, res) => {
  try {
    Logger.debug("Entered into get_policy method");
    const uid = req.query && req.query.uid;
    const premium_id = req.query && req.query.premium_id;
    let query = {};
    if (uid) {
      query.uid = uid;
    } else {
      query.premium_id = premium_id;
    }
    const policy_list = await Policy.find(query);
    res.json(policy_list);
    Logger.debug("Exited from get_policy method");
  } catch (error) {
    res.json({
      error: true,
      message: error.message
    });
    Logger.debug("Error happen in login method");
    Logger.debug(error);
    res.end();
  }
};
