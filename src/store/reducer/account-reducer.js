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
    date: '',
    update: ''
};
exports.ACCOUNT_SUCCESS = "ACCOUNT_SUCCESS";
exports.ACCOUNT_ERROR = "ACCOUNT_ERROR";
exports.UPDATE_SUCCESS = "UPDATE_SUCCESS";
exports.UPDATE_ERROR = "UPDATE_ERROR";
exports.DELETE_SUCCESS = "DELETE_SUCCESS";
exports.DELETE_ERROR = "DELETE_ERROR";
exports.INIT = "INIT";
var reducer = function (state, action) {
    if (state === void 0) { state = stateInitial; }
    switch (action.type) {
        case exports.ACCOUNT_SUCCESS:
            return __assign(__assign(__assign({}, state), action.payload), { error: false });
        case exports.ACCOUNT_ERROR:
            return __assign(__assign({}, state), { error: "affichage non réussi" });
        case exports.UPDATE_SUCCESS:
            return __assign(__assign(__assign({}, state), action.payload), { update: true, error: false });
        case exports.UPDATE_ERROR:
            return __assign(__assign({}, state), { update: false, error: "mise à jour non réussi" });
        case exports.DELETE_SUCCESS:
            return __assign(__assign(__assign({}, state), stateInitial), { error: false });
        case exports.DELETE_ERROR:
            return __assign(__assign({}, state), { error: "désinscription non réussi" });
        case exports.INIT:
            return __assign(__assign(__assign({}, state), stateInitial), { error: false });
        default:
            return state;
    }
};
/*-----------    redux thunk  -------------*/
// action creator which return function
exports.displayAccount = function () { return function (dispatch, getState) {
    // collect user info
    return userAPI_1["default"].infoUser()
        .then(function (res) {
        // inform my reducer this is a success 
        //and take data from response of accountController.displayAccount
        dispatch(exports.accountSuccess(res.data.user));
    })["catch"](function (err) {
        // inform my reducer there is an error
        dispatch(exports.accountError());
    });
}; };
exports.accountPseudo = function (formState) { return function (dispatch, getState) {
    // name of the input
    // axios collect post info from the user via name input
    return userAPI_1["default"].updatePseudo(formState)
        .then(function (res) {
        // inform my reducer this is a success 
        //and take data from response of accountController.updateAccount
        dispatch(exports.updateSuccess(res.data));
    })["catch"](function (err) {
        // inform my reducer there is an error
        if (err.response.data.error.keyValue.pseudo) {
            alert((err.response.data.error.keyValue.pseudo) + " existe déjà!");
        }
        ;
        dispatch(exports.updateError());
    });
}; };
exports.accountMail = function (formState) { return function (dispatch, getState) {
    // name of the inputateInitial
    // axios collect post info from the user via name input
    return userAPI_1["default"].updateMail(formState)
        .then(function (res) {
        // inform my reducer this is a success 
        //and take data from response of accountController.updateAccount
        dispatch(exports.updateSuccess(res.data));
    })["catch"](function (err) {
        // inform my reducer there is an error
        if (err.response.data.error.keyValue.mail) {
            alert((err.response.data.error.keyValue.mail) + " existe déjà!");
        }
        ;
        dispatch(exports.updateError());
    });
}; };
exports.accountPassword = function (formState) { return function (dispatch, getState) {
    // name of the input
    // axios collect post info from the user via name input
    return userAPI_1["default"].updatePassword(formState)
        .then(function (res) {
        // inform my reducer this is a success 
        //and take data from response of accountController.updateAccount
        dispatch(exports.updateSuccess(res.data));
    })["catch"](function (err) {
        // inform my reducer there is an error
        dispatch(exports.updateError());
    });
}; };
exports.deleteAccount = function () { return function (dispatch, getState) {
    return userAPI_1["default"].deleteUser()
        .then(function (res) {
        // inform my reducer this is a success 
        dispatch(exports.deleteSuccess());
    })["catch"](function (err) {
        // inform my reducer there is an error
        dispatch(exports.deleteError());
    });
}; };
/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store = update stateInitial)
exports.accountSuccess = function (payload) { return ({
    type: exports.ACCOUNT_SUCCESS,
    payload: payload
}); };
exports.accountError = function () { return ({
    type: exports.ACCOUNT_ERROR
}); };
exports.updateSuccess = function (payload) { return ({
    type: exports.UPDATE_SUCCESS,
    payload: payload
}); };
exports.updateError = function () { return ({
    type: exports.UPDATE_ERROR
}); };
exports.deleteSuccess = function () { return ({
    type: exports.DELETE_SUCCESS
}); };
exports.deleteError = function () { return ({
    type: exports.DELETE_ERROR
}); };
exports.init = function () { return ({
    type: exports.INIT
}); };
exports["default"] = reducer;
