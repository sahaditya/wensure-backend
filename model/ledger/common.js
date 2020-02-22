const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const constant = require("../../utils/constants");

let Transaction = new Schema({
  amount: { type: Number, require: true },
  date: { type: Date, require: true },
  status: { type: String, require: true, enum: constant.STATUS },
  type: { type: String, require: true, enum: constant.TRANSACTION_TYPE },
  cashback: { type: String }
});

let PolicyTransaction = new Schema({
  policy_id: { type: String, require: true },
  transactions: [Transaction],
  total_deposited: { type: Number, require: true },
  total_withdrawn: { type: Number, require: true },
  total_cashback: { type: Number, require: true }
});

module.exports = {
  PolicyTransaction
};
