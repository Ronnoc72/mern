const express = require('express');
const router = express.Router();
const userTemplate = require("../mongodb/user");

router.get('/', function(req, res, next) {
    userTemplate.findOne({"username": "connor-paxman"}, (err, person) => {
        if (err) console.log(err);
        console.log(person);
    });
});

module.exports = router;
