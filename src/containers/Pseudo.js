"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Pseudo_1 = require("../components/Pseudo");
var account_reducer_1 = require("../store/reducer/account-reducer");
var mapStateToProps = function (state) { return ({
    pseudo: state.account.pseudo,
    update: state.account.update,
    error: state.account.error
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onSubmit: function (formState) {
        dispatch(account_reducer_1.accountPseudo(formState)); // transfer input_name value ?
    },
    init: function () {
        dispatch(account_reducer_1.init());
    }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Pseudo_1["default"]);
