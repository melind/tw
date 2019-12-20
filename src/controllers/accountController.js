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
var user_1 = require("../models/user");
var bcrypt = require("bcryptjs");
var jsonwebtoken = require("jsonwebtoken");
var htmlspecialchars_1 = require("htmlspecialchars");
var AccountController = /** @class */ (function () {
    function AccountController() {
    }
    AccountController.displayAccount = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var token, decodedToken, pseudo, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = request.cookies.jwt;
                        if (!token) {
                            response.status(400).json({
                                text: "No user coockie"
                            });
                        }
                        if (!token) return [3 /*break*/, 2];
                        decodedToken = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY);
                        pseudo = decodedToken.nickname;
                        return [4 /*yield*/, user_1.User.findOne({ pseudo: pseudo })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            response.status(200).json({
                                user: user
                            });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AccountController.updatePseudo = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var pseudo_1, token, decodedToken, name_1, oldUser, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        pseudo_1 = request.body.pseudo;
                        if (!pseudo_1) {
                            response.status(400).json({
                                text: "Requete invalide"
                            });
                        }
                        if (!pseudo_1) return [3 /*break*/, 2];
                        pseudo_1 = pseudo_1.replace(/ /g, "");
                        pseudo_1 = htmlspecialchars_1(pseudo_1);
                        
                        token = request.cookies.jwt;
                        if (!token) {
                            response.status(400).json({
                                text: "No user coockie"
                            });
                        }
                        if (!token) return [3 /*break*/, 2];
                        decodedToken = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY);
                        name_1 = decodedToken.nickname;
                        return [4 /*yield*/, user_1.User.findOne({ "pseudo": name_1 })];
                    case 1:
                        oldUser = _a.sent();
                        if (oldUser) {
                            oldUser.updateOne({ pseudo: pseudo_1 }, function (error, product) { return __awaiter(_this, void 0, void 0, function () {
                                var user, newToken;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (error) {
                                                response.status(400).json({
                                                    error: error
                                                });
                                            }
                                            return [4 /*yield*/, user_1.User.findOne({ pseudo: pseudo_1 })];
                                        case 1:
                                            user = _a.sent();
                                            newToken = jsonwebtoken.sign({
                                                nickname: user.pseudo,
                                                admin: user.admin,
                                                exp: Math.floor(Date.now() / 1000) + (60 * 60)
                                            }, process.env.JWT_PRIVATE_KEY);
                                            response.cookie('jwt', newToken, {
                                            //httpOnly: true, //cookie not available through client js code (xss)!!! pas de cookie.load
                                            //secure: true // true to force https
                                            });
                                            response.status(200).json({
                                                //user,
                                                text: "Modifications réussies!"
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        err_1;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountController.updateMail = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var mail_1, regex, regexMail, token, decodedToken, name_2, oldUser, err_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        mail_1 = request.body.mail;
                        if (!mail_1) {
                            response.status(400).json({
                                text: "Requete invalide"
                            });
                        }
                        if (!mail_1) return [3 /*break*/, 2];
                        mail_1 = mail_1.replace(/ /g, "");
                        mail_1 = htmlspecialchars_1(mail_1);
                        regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
                        regexMail = regex.test(mail_1);
                        if (!regexMail) {
                            response.status(400).json({
                                text: "Format mail invalide"
                            });
                        }
                        if (!regexMail) return [3 /*break*/, 2];
                        token = request.cookies.jwt;
                        if (!token) {
                            response.status(400).json({
                                text: "No user coockie"
                            });
                        }
                        if (!token) return [3 /*break*/, 2];
                        decodedToken = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY);
                        name_2 = decodedToken.nickname;
                        return [4 /*yield*/, user_1.User.findOne({ "pseudo": name_2 })];
                    case 1:
                        oldUser = _a.sent();
                        if (oldUser) {
                            oldUser.updateOne({ mail: mail_1 }, function (error, product) { return __awaiter(_this, void 0, void 0, function () {
                                var user, newToken;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (error) {
                                                response.status(400).json({
                                                    error: error
                                                });
                                            }
                                            return [4 /*yield*/, user_1.User.findOne({ mail: mail_1 })];
                                        case 1:
                                            user = _a.sent();
                                            newToken = jsonwebtoken.sign({
                                                nickname: user.pseudo,
                                                admin: user.admin,
                                                exp: Math.floor(Date.now() / 1000) + (60 * 60)
                                            }, process.env.JWT_PRIVATE_KEY);
                                            response.cookie('jwt', newToken, {
                                            //httpOnly: true, //cookie not available through client js code (xss)!!! pas de cookie.load
                                            //secure: true // true to force https
                                            });
                                            response.status(200).json({
                                                //user,
                                                text: "Modifications réussies!"
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        err_2;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountController.updatePassword = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var password_1, token, decodedToken, name_3, oldUser, err_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        password_1 = request.body.password;
                        if (!password_1) {
                            response.status(400).json({
                                text: "Requete invalide"
                            });
                        }
                        if (password_1.length < 8) {
                            response.status(400).json({
                                text: "mot de passe pas assez long"
                            });
                        }
                        if (!password_1) return [3 /*break*/, 2];
                        password_1 = password_1.replace(/ /g, "");
                        password_1 = htmlspecialchars_1(password_1);
                        password_1 = bcrypt.hashSync(password_1, 10);
                        token = request.cookies.jwt;
                        if (!token) {
                            response.status(400).json({
                                text: "No user cookie"
                            });
                        }
                        if (!token) return [3 /*break*/, 2];
                        decodedToken = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY);
                        name_3 = decodedToken.nickname;
                        return [4 /*yield*/, user_1.User.findOne({ "pseudo": name_3 })];
                    case 1:
                        oldUser = _a.sent();
                        if (oldUser) {
                            oldUser.updateOne({ password: password_1 }, function (error, product) { return __awaiter(_this, void 0, void 0, function () {
                                var user, newToken;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (error) {
                                                response.status(400).json({
                                                    error: error
                                                });
                                            }
                                            return [4 /*yield*/, user_1.User.findOne({ password: password_1 })];
                                        case 1:
                                            user = _a.sent();
                                            newToken = jsonwebtoken.sign({
                                                nickname: user.pseudo,
                                                admin: user.admin,
                                                exp: Math.floor(Date.now() / 1000) + (60 * 60)
                                            }, process.env.JWT_PRIVATE_KEY);
                                            response.cookie('jwt', newToken, {
                                            //httpOnly: true, //cookie not available through client js code (xss)!!! pas de cookie.load
                                            //secure: true // true to force https
                                            });
                                            response.status(200).json({
                                                //user,
                                                text: "Modifications réussies!"
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        err_3;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AccountController;
}());
exports["default"] = AccountController;
