const CONSTANTS = {
  PORT_NO: 8081,
  DB_URL:
    "mongodb+srv://sahadi:sahadi123456789@sah-db-free-pyrm7.mongodb.net/test?retryWrites=true&w=majority"
};

STATUS = ["SUCCSEED", "PENDING", "FAILED"];
TRANSACTION_TYPE = ["DEBIT", "CREDIT"];

module.exports = { CONSTANTS, STATUS, TRANSACTION_TYPE };
