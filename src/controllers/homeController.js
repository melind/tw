"use strict";
exports.__esModule = true;
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.index = function (request, response) {
        response.status(200).json({
            text: "Hi from non subscriber home"
        });
    };
    HomeController.home = function (request, response) {
        response.status(200).json({
            text: "Hi from home"
        });
    };
    return HomeController;
}());
exports["default"] = HomeController;
