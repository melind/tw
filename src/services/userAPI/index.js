"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var qs = require("qs");
var react_cookie_1 = require("react-cookie");
var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
};
var API_URL ="http://ec2-15-188-194-36.eu-west-3.compute.amazonaws.com";

exports["default"] = {
    signupUser: function (formState) {
        return axios_1["default"].post(API_URL + '/signup', qs.stringify(formState), { headers: headers });
    },
    loginUser: function (formState) {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].post(API_URL + '/login', qs.stringify(formState), { headers: headers });
    },
    logOut: function () {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + '/logout');
    },
    isAuth: function () {
        if (react_cookie_1["default"].load('jwt'))
            return true;
    },
    infoUser: function () {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + '/account');
    },
    updatePseudo: function (formState) {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].put(API_URL + '/updatePseudo', qs.stringify(formState), { headers: headers });
    },
    updateMail: function (formState) {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].put(API_URL + '/updateMail', qs.stringify(formState), { headers: headers });
    },
    updatePassword: function (formState) {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].put(API_URL + '/updatePassword', qs.stringify(formState), { headers: headers });
    },
    isAdmin: function () {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + '/admin');
    },
    deleteUser: function () {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"]["delete"](API_URL + '/deleteAccount', { headers: headers });
    },
    home: function () {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + '/home');
    },
    index: function () {
        return axios_1["default"].get(API_URL + '/');
    }
};
