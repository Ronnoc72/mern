const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const userTemplate = require("../mongodb/user");

const updateTempate = (query, updateObj) => {
	console.log("updating...")
	userTemplate.updateOne(query, updateObj, (err) => {
		if (err) console.error("Err: ", err);
	});
	console.log("finished...");
}

router.get('/:title/:text/:styles/:username/:id', (req, res, next) => {
	let query = {"username": req.params.username};
	let pushUpdate = {"$push": {"documents": 
	{"title": req.params.title, "text": req.params.text, "styles": req.params.styles, "id": req.params.id}}};
	let update = {[`documents.${req.params.id}`]: {"title": req.params.title, "text": req.params.text, "styles": req.params.styles, "id": req.params.id}};
	userTemplate.findOne(query, (err, person) => {
		if (err) console.error("Err: ", err);
		if (person) {
			if (!person.documents[0]) {
				console.log("updating with the first document");
				updateTempate(query, pushUpdate);
				return;
			}
			let push = false;
			for (let obj in person.documents) {
				if (person.documents[obj].id == req.params.id) {
					push = true;
				}
			}
			if (push) {
				updateTempate(query, update);
			} else {
				updateTempate(query, pushUpdate);
			}
		}
	});
});

module.exports = router;
