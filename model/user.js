const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: { type: String, require: true },
  uid: {
    type: String,
    required: true,
    maxlength: [12, "uid should be 12 digit"]
  },
  occupation: { type: String, require: true },
  organization: { type: String, require: true },
  secure_pin: {
    type: Number,
    required: true,
    maxlength: [6, "secure pin should be 6 digit"]
  }, //Need more thought
  contact: {
    phone_no: { type: Number, require: true },
    address: { type: String, require: true },
    email_id: { type: String, required: true }
  },
  insurance_reason: { type: String, require: true },
  death_wish: { type: String, require: true },
  password: { type: String, require: true, maxlength: 8 }
});

module.exports = mongoose.model("User", UserSchema);

// USER DETAILS
// {
//     "name": "string",
//     "uid": "string",
//     "occupation": "string",
//     "organization": "string",
//     "contact": {
//         "mobile": "string",
//         "address": "string",
//         "email": "string"
//     },
//     "secure_pin": "encrypt string",
//     "created_on": "string",
//     "updated_on": "String"
// }

// USER PREMIUM DETAILS
// {
//     "policy_id": "string",
//     "uid": "aadhar number string",
//     "insurance_type": "string",
//     "premium_amount": "number",
//     "insurance_provider": "string",
//     "premium_type": "enum: QUARTERLY/ANNUAL/...",
//     "premium_payment_date": "string",

// }

// // manager ledger
// {
//     "uid_1 string": "{user_ledger_for_uid_1}",
//         "uid_2 string": "{user_ledger_for_uid_1}",
//             "........": "........",
// }
