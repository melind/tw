"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Nav_1 = require("../components/Nav");
var nav_reducer_1 = require("../store/reducer/nav-reducer");
var mapStateToProps = function (state) { return ({
    loggedout: state.nav.loggedout
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onClick: function () {
        dispatch(nav_reducer_1.logoutSuccess());
    },
    init: function () {
        dispatch(nav_reducer_1.init());
    }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Nav_1["default"]);
