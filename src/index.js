"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var auth_1 = require("./routes/auth");
var port = 3001;
app.use('/auth', auth_1.default);
app.listen(port, function () {
    console.log("App is listing to port ", port);
});
