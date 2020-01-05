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
    password: '',
    loggedin: false,
    subscriber: true,
    error: ''
};
exports.LOGIN_SUCCESS = "LOGIN_SUCCESS";
exports.LOGIN_ERROR = "LOGIN_ERROR";
exports.INIT = "INIT";
var reducer = function (state, action) {
    if (state === void 0) { state = stateInitial; }
    switch (action.type) {
        case exports.LOGIN_SUCCESS:
            return __assign(__assign(__assign({}, state), action.payload), { loggedin: true, subscriber: true, error: false });
        case exports.LOGIN_ERROR:
            return __assign(__assign({}, state), { loggedin: false, subscriber: false, error: "Connexion échoué" });
        case exports.INIT:
            return __assign(__assign(__assign({}, state), stateInitial), { loggedin: false, subscriber: false, error: false });
        default:
            return state;
    }
};
/*-----------    redux thunk  -------------*/
// action creator which return function
exports.login = function (formState) { return function (dispatch, getState) {
    // axios check post info from the user
    return userAPI_1["default"].loginUser(formState)
        .then(function (res) {
        // inform my reducer this is a success
        //and take data from response of auhtController.postLogin
        dispatch(exports.loginSuccess(res.data));
    })["catch"](function (err) {
        // inform my reducer there is an error
        if (err.response.data.text) {
            alert(err.response.data.text);
        }
        dispatch(exports.loginError());
    });
}; };
/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store)
exports.loginSuccess = function (payload) { return ({
    type: exports.LOGIN_SUCCESS,
    payload: payload
}); };
exports.loginError = function () { return ({
    type: exports.LOGIN_ERROR
}); };
exports.init = function () { return ({
    type: exports.INIT
}); };
exports["default"] = reducer;
