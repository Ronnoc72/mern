const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const userTemplate = require("../mongodb/user");

router.get('/:title/:text/:styles/:username', (req, res, next) => {
	let query = {"username": req.params.username};
	let update = {$push: {"documents": 
	{"title": req.params.title, "text": req.params.text, "styles": req.params.styles}}};
	userTemplate.updateOne(query, update, (err) => {
		if (err) console.log("Err: ", err);
	})
});

module.exports = router;
