"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var signup_reducer_1 = require("./signup-reducer");
var login_reducer_1 = require("./login-reducer");
var nav_reducer_1 = require("./nav-reducer");
var account_reducer_1 = require("./account-reducer");
var rootReducer = redux_1.combineReducers({
    signup: signup_reducer_1["default"],
    login: login_reducer_1["default"],
    nav: nav_reducer_1["default"],
    account: account_reducer_1["default"]
});
exports["default"] = rootReducer;
