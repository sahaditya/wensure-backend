const Logger = require("../utils/logger");
const User = require("../model/user");

exports.login = async (req, res) => {
  try {
    Logger.debug("Entered into login method");
    let user_detail = await User.find({ email_id: req.body.email_id });
    user_detail = user_detail[0];
    if (user_detail.password == req.body.password) {
      const detail = {
        name: user_detail.name,
        occupation: user_detail.occupation,
        organization: user_detail.organization
      };
      res.json({
        status: true,
        ...detail
      });
    } else {
      res.json({
        status: false
      });
    }
    Logger.debug("Exited from login method");
    res.end();
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
