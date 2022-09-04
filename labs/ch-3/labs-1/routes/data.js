"use strict";
const { promisify } = require("util");
const { randomBytes } = require("crypto");
const { Router } = require('express')
const router = Router()

function data() { 
    return randomBytes(10).toString("base64");
};

router.get('/', (req,res) => {
    res.send(data());
})

module.exports = router;
