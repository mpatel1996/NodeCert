"use strict";
const express = require("express");
const createError = require("http-errors");
const dataRoute = require("./routes/data");
const app = express();

app.use("/", dataRoute);
app.use((req, res, next) => {
    if (req.method !== "GET") {
        return;
    }
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;
