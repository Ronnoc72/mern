const express = require('express');
const router = express.Router();
const userTemplate = require("../mongodb/user");

router.get('/:username', function(req, res, next) {
	console.log(req.params.username);
    userTemplate.findOne({"username": req.params.username}, (err, person) => {
        if (err) console.log(err);
        if (person) {
        	res.json({history: person.documents});
        }
    });
});

module.exports = router;
