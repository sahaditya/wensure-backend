const Logger = require("../utils/logger");
const UserLedger = require("../model/ledger/user_ledger");
const Policy = require("../model/policy");
const constant = require("../utils/constants");

get_cash_back = (amount, cback) => {
  cb = (constant.CASHBACK_PERCENTAGE / 100) * amount + cback;
  Logger.debug(cb);
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
    old_obj = JSON.parse(JSON.stringify(user_policy_ledger));
    delete old_obj.__v;
    for (let element in old_obj[0].transaction_history) {
      // old_obj[0].transaction_history.forEach(element => {
      if (element.policy_id === req.body.policy_id) {
        const cb = element.total_cashback;
        new_obj = {
          amount: req.body.amount,
          date: req.body.date,
          status: "SUCCSEED",
          type: "CREDIT",
          cashback: 30
        };
        element.transactions.push(new_obj);
        element.total_cashback = element.transactions.reduce((acc, val) => {
          return acc + val.cashback;
        }, 0);
        break;
      }
    }
    let saved = await UserLedger.updateOne(
      { uid: req.body.uid },
      { ...old_obj[0] }
    );
    res.json(old_obj);
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

exports.check_balance = async (req, res) => {
  try {
    const uid = req.query && req.query.uid;
    const user_ledger = await UserLedger.find({ uid: uid });
    let obj = {};
    user_ledger[0].transaction_history.forEach(element => {
      // ((acc, val) => {
      //   Logger.log("val.amout", val.amout);
      //   return acc + val.amout;
      // }, 0)
      obj[element.policy_id] = {
        policy_id: element.policy_id,
        balance: element.transactions.reduce((a, v) => a + v.amount, 0)
      };
    });
    res.json(obj);
  } catch (error) {
    res.json({
      error: true,
      message: error.message
    });
    Logger.debug("Error happen in check_balance method");
    Logger.debug(error);
    res.end();
  }
};
