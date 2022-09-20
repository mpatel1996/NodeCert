"use strict";
const { Router } = require("express");
const router = Router();

const index = `<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     h1 { color: #EEE; font-family: sans-serif }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`;

router.get('/', (req, res) => {
    res.status(200).send(index)
})

module.exports = router;