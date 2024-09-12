const express = require("express");
const GroupController = require("../controllers/group.controller");
const router = express.Router();

router.post("/create-group", GroupController.createGroupController);

module.exports = router;
