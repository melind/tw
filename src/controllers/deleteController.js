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
var jsonwebtoken = require("jsonwebtoken");
var DeleteController = /** @class */ (function () {
    function DeleteController() {
    }
    DeleteController.deleteAccount = function (request, response) {
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
                            user.remove(function (error, product) {
                                if (error) {
                                    console.log("delete error: ", error);
                                    response.status(400).json({
                                        error: error
                                    });
                                }
                                else {
                                    //we delete the coockie and session
                                    response.clearCookie('jwt');
                                    request.session.destroy(function (err) {
                                        if (err) {
                                            console.error(err);
                                        }
                                    });
                                    response.status(200).json({
                                        text: "Delete account succes"
                                    });
                                }
                            });
                        }
                        console.log("Hello from delete delete");
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return DeleteController;
}());
exports["default"] = DeleteController;
