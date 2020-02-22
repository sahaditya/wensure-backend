const Logger = require("../utils/logger");
const UserLedger = require("../model/ledger/user_ledger");
const AdminLedger = require("../model/ledger/admin_ledger");

exports.create_user_ledger = (req, res) => {
  let userLedger = new UserLedger({ ...req.body });
  Logger.debug(req.body);
  userLedger.save(function(err, doc) {
    if (err) {
      console.log("failed to create UserLedger", err);
      res.json({ message: "new UserLedger creation failed" });
      res.end();
    }
    res.json({ message: "new UserLedger createed successfully", doc });
    res.end();
  });
};

exports.create_admin_ledger = (req, res) => {
  let adminLedger = new AdminLedger({ ...req.body });

  adminLedger.save(function(err) {
    if (err) {
      console.log("failed to create adminLedger", err);
      res.json({ message: "new adminLedger creation failed" });
      res.end();
    }
    res.json({ message: "new adminLedger createed successfully" });
    res.end();
  });
};
