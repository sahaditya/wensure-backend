const express = require("express");
const router = express.Router();

const user_service = require("../service/user_service");
const policy_service = require("../service/policy_service");
const ledger = require("../service/ledger_service");
const login = require("../service/login_service");

router.get("/test", user_service.test);

router.post("/user", user_service.create_user);
router.post("/policy", policy_service.create_policy);

router.post("/ledger/user", ledger.create_user_ledger);
router.post("/ledger/admin", ledger.create_admin_ledger); //NOT REQUIRED
router.post("/login", login.login);

module.exports = router;
