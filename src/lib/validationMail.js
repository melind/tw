"use strict";
exports.__esModule = true;
var validate = require("validate.js");
var displayError = function (props) {
    var constraints = {
        mail: {
            presence: true,
            format: {
                pattern: /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/,
                message: ": Format invalide"
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
       
    return [result.mail];
};
exports["default"] = displayError;
