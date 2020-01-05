"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var userAPI_1 = require("../../services/userAPI");
var stateInitial = {
    pseudo: '',
    mail: '',
    password: '',
    subscriber: false
};
exports.SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
exports.SIGNUP_ERROR = "SIGNUP_ERROR";
exports.INIT = "INIT";
var reducer = function (state, action) {
    if (state === void 0) { state = stateInitial; }
    switch (action.type) {
        case exports.SIGNUP_SUCCESS:
            return __assign(__assign(__assign({}, state), action.payload), { subscriber: true, error: false });
        case exports.SIGNUP_ERROR:
            return __assign(__assign({}, state), { subscriber: false, error: "Inscription non réussi" });
        case exports.INIT:
            return __assign(__assign(__assign({}, state), stateInitial), { subscriber: false, error: false });
        default:
            return state;
    }
};
/*-----------    redux thunk  -------------*/
// action creator which return function
exports.signUp = function (formState) { return function (dispatch, getState) {
    // name of the input
    // axios collect post info from the user via name input
    return userAPI_1["default"].signupUser(formState)
        .then(function (res) {
        // inform my reducer this is a success 
        //and take data from response of auhtController.postSignup
        dispatch(exports.signupSuccess(res.data));
    })["catch"](function (err) {
        // inform my reducer there is an error
        if (err.response.data.text) {
            alert(err.response.data.text);
        }
        else if (err.response.data.error.keyValue.pseudo || err.response.data.error.keyValue.mail) {
            alert((err.response.data.error.keyValue.pseudo || err.response.data.error.keyValue.mail) + " existe déjà!");
        }
        else {
        }
        dispatch(exports.signupError());
    });
}; };
/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store = update stateInitial)
exports.signupSuccess = function (payload) { return ({
    type: exports.SIGNUP_SUCCESS,
    payload: payload
}); };
exports.signupError = function () { return ({
    type: exports.SIGNUP_ERROR
}); };
exports.init = function () { return ({
    type: exports.INIT
}); };
exports["default"] = reducer;
