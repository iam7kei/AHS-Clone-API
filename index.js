"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var index_1 = require("./routes/auth/index");
var port = 3001;
app.use('/auth', index_1.default);
app.listen(port, function () {
    console.log("App is listing to port ", port);
});
