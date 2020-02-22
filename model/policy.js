const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PolicySchema = new Schema({
  policy_id: { type: String, require: true },
  uid: { type: String, required: true, maxlength: 12 },
  insurance_type: { type: String, require: true },
  premium_type: { type: String, require: true },
  premium_payment_date: { type: String, require: true }
});

module.exports = mongoose.model("Policy", PolicySchema);
