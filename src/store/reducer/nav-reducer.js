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
var stateInitial = {
    loggedout: false
};
exports.LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
exports.LOGOUT_ERROR = "LOGOUT_ERROR";
exports.INIT = "INIT";
var reducer = function (state, action) {
    if (state === void 0) { state = stateInitial; }
    switch (action.type) {
        case exports.LOGOUT_SUCCESS:
            return __assign(__assign({}, state), { loggedout: true, error: false });
        case exports.LOGOUT_ERROR:
            return __assign(__assign({}, state), { loggedout: false, error: "Déconnexion non réussi" });
        case exports.INIT:
            return __assign(__assign(__assign({}, state), stateInitial), { loggedout: false, error: false });
        default:
            return state;
    }
};
/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store = update stateInitial)
exports.logoutSuccess = function () { return ({
    type: exports.LOGOUT_SUCCESS
}); };
exports.logoutError = function () { return ({
    type: exports.LOGOUT_ERROR
}); };
exports.init = function () { return ({
    type: exports.INIT
}); };
exports["default"] = reducer;
