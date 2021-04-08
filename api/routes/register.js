const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const userTemplate = require("../mongodb/user");

router.get('/:username/:password', function(req, res, next) {
    console.log("cool");
    const user = new userTemplate({
        _id: mongoose.Types.ObjectId(),
        username: res.params.username,
        password: res.params.password,
        documents: []
    });
    user.save(err => {
        if (err) console.error(err);
    });
});

module.exports = router;
