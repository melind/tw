"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Signup_1 = require("../components/Signup");
var signup_reducer_1 = require("../store/reducer/signup-reducer");
var mapStateToProps = function (state) { return ({
    pseudo: state.signup.pseudo,
    mail: state.signup.mail,
    password: state.signup.password,
    subscriber: state.signup.subscriber,
    error: state.signup.error
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onSubmit: function (formState) {
        dispatch(signup_reducer_1.signUp(formState)); // transfer input_name value ?
    },
    init: function () {
        dispatch(signup_reducer_1.init());
    }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Signup_1["default"]);
