"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Account_1 = require("../components/Account");
var account_reducer_1 = require("../store/reducer/account-reducer");
var mapStateToProps = function (state) { return ({
    pseudo: state.account.pseudo,
    mail: state.account.mail,
    password: state.account.password,
    date: state.account.date
}); };
var mapDispatchToProps = function (dispatch) { return ({
    display: function () {
        dispatch(account_reducer_1.displayAccount());
    },
    init: function () {
        dispatch(account_reducer_1.init());
    },
    onClick: function () {
        dispatch(account_reducer_1.deleteAccount());
    }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Account_1["default"]);
