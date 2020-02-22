const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const PolicyTransaction = require("./common");

const constant = require("../../utils/constants");
let Transaction = {
  amount: { type: Number, require: true },
  date: { type: String, require: true },
  status: { type: String, require: true, enum: constant.STATUS },
  type: { type: String, require: true, enum: constant.TRANSACTION_TYPE },
  cashback: { type: String }
};

let PolicyTransaction = {
  policy_id: { type: Number, require: true },
  transactions: [Transaction],
  total_deposited: { type: Number, require: true },
  total_withdrawn: { type: Number, require: true },
  total_cashback: { type: Number, require: true }
};

let AdminLedgerSchema = new Schema({
  uid: {
    type: String,
    required: true,
    maxlength: [12, "uid should be 12 digit"]
  },
  policy_id: PolicyTransaction
});
module.exports = mongoose.model("AdminLedger", AdminLedgerSchema);
