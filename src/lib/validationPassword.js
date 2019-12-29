"use strict";
exports.__esModule = true;
var validate = require("validate.js");
var displayError = function (props) {
    var constraints = {
        password: {
            presence: true,
            length: {
                minimum: 8,
                message: ": Doit contenir 8 caractères"
            }
        },
        pseudo: {
            presence: true,
            length: {
                minimum: 1000,
                message: ": Doit contenir 8 caractères"
            }
        }
    };
    //result = undefined if input is empty so let error for pseudo
    var result = validate(props, constraints);
    if (result)
        console.log("result: ", result);
    return [result.password];
};
exports["default"] = displayError;
