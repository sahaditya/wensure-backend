const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PolicyTransaction = require("./common");

let UserLedgerSchema = new Schema({
  uid: {
    type: String,
    required: true,
    maxlength: [12, "uid should be 12 digit"]
  },
  transaction_history: [PolicyTransaction]
});
module.exports = mongoose.model("UserLedger", UserLedgerSchema);

// //txn
// {
//     "id": "string",
//     "amount": "number",
//     "date": "strng",
//     "status": "string",
//     "type": "dr/cr",
//     "cashback" : "is_cr ? number : nil"
// }

// // policy txn
// {
//     "policy_id": "string",
//     "transactions": ["{txn1}", "{txn1}", "{txn1}", "{txn1}", "..."] ,
//     "total_deposited": "number",
//     "total_withdrawn": "number" ,
//     "total_cashback": "number"
// }

// // user ledger
// {
//     "uid": "string",
//     "txn_history": ["{policy_txn}", "{policy_txn}", "{policy_txn}", "..."],

// }
