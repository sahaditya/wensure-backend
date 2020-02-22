const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PolicyTransaction = require("./common");

let AdminLedgerSchema = new Schema({
  uid: {
    type: String,
    required: true,
    maxlength: [12, "uid should be 12 digit"]
  },
  transaction_history: [PolicyTransaction]
});
module.exports = mongoose.model("AdminLedger", AdminLedgerSchema);
