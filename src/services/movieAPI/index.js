"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var qs = require("qs");
var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
};
var API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);
exports["default"] = {
    nowPlaying: function () {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + '/nowplaying');
    },
    genres: function () {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + '/genresMovieList');
    },
    moviesByGenres: function (id, number) {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + ("/moviesByGenres/" + id + "/" + number));
    },
    genresTv: function () {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + '/genresTvShowList');
    },
    tvShowsByGenres: function (id, number) {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + ("/tvShowsByGenres/" + id + "/" + number));
    },
    media: function (media, id) {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].get(API_URL + ("/media/" + media + "/" + id));
    },
    search: function (search) {
        axios_1["default"].defaults.withCredentials = true;
        return axios_1["default"].post(API_URL + '/home', qs.stringify(search), { headers: headers });
    }
};
