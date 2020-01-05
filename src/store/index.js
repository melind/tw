"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var reducer_1 = require("./reducer");
var store = redux_1.createStore(reducer_1["default"], redux_1.applyMiddleware(redux_thunk_1["default"]));
exports["default"] = store;
