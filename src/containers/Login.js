"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Login_1 = require("../components/Login");
var login_reducer_1 = require("../store/reducer/login-reducer");
var mapStateToProps = function (state) { return ({
    pseudo: state.login.pseudo,
    password: state.login.password,
    loggedin: state.login.loggedin,
    subscriber: state.login.subscriber,
    error: state.login.error
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onSubmit: function (formState) {
        dispatch(login_reducer_1.login(formState));
    },
    init: function () {
        dispatch(login_reducer_1.init());
    }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login_1["default"]);
