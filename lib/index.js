"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes = require("./routes");
var cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors());
var port = 3000;
routes.register(app);
app.listen(port, function () {
    console.log('server started at -->', port);
});
