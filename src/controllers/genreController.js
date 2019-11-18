"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var GenreController = /** @class */ (function () {
    function GenreController() {
    }
    GenreController.genresMovieList = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var API_KEY, genresUrl, genres;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        API_KEY = process.env.API_KEY;
                        genresUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY + "&language=fr-FR";
                        return [4 /*yield*/, axios_1["default"].get(genresUrl)
                                .then(function (res) { return res.data; })["catch"](function (err) { console.log(err); })];
                    case 1:
                        genres = _a.sent();
                        response.status(200).json({
                            genres: genres
                        });
                        console.log("Hello from list of genres");
                        return [2 /*return*/];
                }
            });
        });
    };
    GenreController.moviesByGenre = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, API_KEY, moviesGenreUrl, moviesGenre;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        API_KEY = process.env.API_KEY;
                        moviesGenreUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&with_genres=" + id + "&language=fr-FR";
                        return [4 /*yield*/, axios_1["default"].get(moviesGenreUrl)
                                .then(function (res) { return res.data; })["catch"](function (err) { console.log(err); })];
                    case 1:
                        moviesGenre = _a.sent();
                        response.status(200).json({
                            moviesGenre: moviesGenre
                        });
                        console.log("Hello from list of movie by genre");
                        return [2 /*return*/];
                }
            });
        });
    };
    GenreController.genresListTvShow = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var API_KEY, genresTvShowUrl, genres;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        API_KEY = process.env.API_KEY;
                        genresTvShowUrl = "https://api.themoviedb.org/3/genre/tv/list?api_key=" + API_KEY + "&language=fr-FR";
                        return [4 /*yield*/, axios_1["default"].get(genresTvShowUrl)
                                .then(function (res) { return res.data; })["catch"](function (err) { console.log(err); })];
                    case 1:
                        genres = _a.sent();
                        response.status(200).json({
                            genres: genres
                        });
                        console.log("Hello from list of genres for the tv shows");
                        return [2 /*return*/];
                }
            });
        });
    };
    GenreController.tvShowByGenre = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, API_KEY, tvShowsGenreUrl, tvShowGenre;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        API_KEY = process.env.API_KEY;
                        tvShowsGenreUrl = "https://api.themoviedb.org/3/discover/tv?api_key=" + API_KEY + "&with_genres=" + id + "&language=fr-FR";
                        return [4 /*yield*/, axios_1["default"].get(tvShowsGenreUrl)
                                .then(function (res) { return res.data; })["catch"](function (err) { console.log(err); })];
                    case 1:
                        tvShowGenre = _a.sent();
                        response.status(200).json({
                            tvShowGenre: tvShowGenre
                        });
                        console.log("Hello from list of tv shows by genre");
                        return [2 /*return*/];
                }
            });
        });
    };
    return GenreController;
}());
exports["default"] = GenreController;
