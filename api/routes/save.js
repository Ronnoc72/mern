const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const userTemplate = require("../mongodb/user");

router.get("/:input/:paper/:title", function(req, res, next) {
	console.log(localStorage.username);
	console.log(req.params.title);
	let query = {"username": localStorage.username};
	let update = {$push: {"documents": req.params.title}};
	console.log(query);
	console.log(update);
	userTemplate.updateOne(query, update, (err) => {
		if (err) console.log(err);
	});
});

module.exports = router;
