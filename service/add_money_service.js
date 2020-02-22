const Logger = require("../utils/logger");
const UserLedger = require("../model/ledger/user_ledger");
const Policy = require("../model/policy");
const constant = require("../utils/constants");

get_cash_back = amount => {
  cb = (constant.CASHBACK_PERCENTAGE / 100) * amount;
  return cb;
};
exports.add_money = async (req, res) => {
  try {
    Logger.debug("Entered into add_money method");
    let user_policy_ledger = await UserLedger.find({
      $and: [
        { uid: req.body.uid },
        { "transaction_history.policy_id": req.body.policy_id }
      ]
    });
    const new_payment = {
      amount: req.body.amount,
      date: new Date(),
      type: req.body.type,
      cashback:
        req.body.type == constant.TRANSACTION_TYPE[1]
          ? get_cash_back(user_policy_ledger, req.body.amount) +
            user_policy_ledger.cashback
          : user_policy_ledger.cashback
    };
    Logger.debug(user_policy_ledger[0].transaction_history);
    if (user_policy_ledger[0].uid) {
      user_policy_ledger[0].transaction_history.forEach(element => {
        if (element.policy_id === req.body.policy_id) {
          element.transactions.push(new_payment);

          Logger.debug(element.transactions);
          element.total_deposited = element.transactions.reduce((acc, val) => {
            return acc + val.amount;
          }, 0);
          element.total_cashback = element.transactions.reduce((acc, val) => {
            return acc + val.cashback;
          }, 0);
        }
      });
    }

    const saved = u_l.save();
    res.json(saved);
    res.end();
    Logger.debug("Exited from add_money method");
  } catch (error) {
    res.json({
      error: true,
      message: error.message
    });
    Logger.debug("Error happen in add_money method");
    Logger.debug(error);
    res.end();
  }
};
