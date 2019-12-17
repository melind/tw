"use strict";
exports.__esModule = true;
var express = require("express");
var bodyparser = require("body-parser");
var homeController_1 = require("./controllers/homeController");
var authController_1 = require("./controllers/authController");
var accountController_1 = require("./controllers/accountController");
var deleteController_1 = require("./controllers/deleteController");
var movieController_1 = require("./controllers/movieController");
var searchController_1 = require("./controllers/searchController");
var genreController_1 = require("./controllers/genreController");
var mediaController_1 = require("./controllers/mediaController");
var adminController_1 = require("./controllers/adminController");
var authMiddleware_1 = require("./middlewares/authMiddleware");
var adminMiddleware_1 = require("./middlewares/adminMiddleware");
var bodyParser = bodyparser.urlencoded({ extended: true });
var router = express.Router();
router.get('/', homeController_1["default"].index);
router.get('/home', authMiddleware_1["default"], homeController_1["default"].home);
router.route('/signup')
    .get(authController_1["default"].getSignup)
    .post(bodyParser, authController_1["default"].postSignup);
router.route('/login')
    .get(authController_1["default"].getLogin)
    .post(bodyParser, authController_1["default"].postLogin);
router.get('/logout', authMiddleware_1["default"], authController_1["default"].logout);
router.get('/account', authMiddleware_1["default"], accountController_1["default"].displayAccount);
router.put('/updatePseudo', bodyParser, authMiddleware_1["default"], accountController_1["default"].updatePseudo);
router.put('/updateMail', bodyParser, authMiddleware_1["default"], accountController_1["default"].updateMail);
router.put('/updatePassword', bodyParser, authMiddleware_1["default"], accountController_1["default"].updatePassword);
router["delete"]('/deleteAccount', authMiddleware_1["default"], deleteController_1["default"].deleteAccount);
router.get('/nowplaying', authMiddleware_1["default"], movieController_1["default"].nowPlaying);
router.post('/home', bodyParser, authMiddleware_1["default"], searchController_1["default"].searchMedia);
router.get('/genresMovieList', authMiddleware_1["default"], genreController_1["default"].genresMovieList);
router.get('/moviesByGenres/:id/:number', authMiddleware_1["default"], genreController_1["default"].moviesByGenre);
router.get('/genresTvShowList', authMiddleware_1["default"], genreController_1["default"].genresListTvShow);
router.get('/tvShowsByGenres/:id/:number', authMiddleware_1["default"], genreController_1["default"].tvShowByGenre);
router.get('/media/:media/:id', authMiddleware_1["default"], mediaController_1["default"].mediaDetails);
router.get('/admin', adminMiddleware_1["default"], adminController_1["default"].usersList);
exports["default"] = router;
