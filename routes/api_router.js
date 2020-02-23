const express = require("express");
const router = express.Router();

const user_service = require("../service/user_service");
const policy_service = require("../service/policy_service");
const ledger = require("../service/ledger_service");
const login = require("../service/login_service");
const money_service = require("../service/money_service");

router.get("/test", user_service.test);

router.post("/user", user_service.create_user);
router.post("/policy", policy_service.create_policy);
router.get("/policy", policy_service.get_policy);

router.post("/ledger/user", ledger.create_user_ledger);
router.post("/ledger/admin", ledger.create_admin_ledger); //NOT REQUIRED
router.post("/login", login.login);
router.post("/addmoney", money_service.add_money);
router.get("/balance", money_service.check_balance);

module.exports = router;
