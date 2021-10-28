"use strict";
exports.__esModule = true;
var counter_1 = require("./counter");
var isLogged_1 = require("./isLogged");
var redux_1 = require("redux");
var allReducer = (0, redux_1.combineReducers)({
    counter: counter_1["default"],
    isLogged: isLogged_1["default"]
});
exports["default"] = allReducer;
