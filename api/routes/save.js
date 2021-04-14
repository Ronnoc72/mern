const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const userTemplate = require("../mongodb/user");

router.get("/:input/:paper/:title", function(req, res, next) {
	userTemplate.updateOne({username: localStorage.username}, )
});

module.exports = router;
