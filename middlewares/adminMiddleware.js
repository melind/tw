"use strict";
exports.__esModule = true;
var jsonwebtoken = require("jsonwebtoken");
function default_1(request, response, next) {
    // check cookie presence and good jwt
    // no need to check for this pages so we get their url (http://....)
    if (['/', '/login', '/signup'].includes(request.url)) {
        next();
    }
    else {
        /*console.log("cookies", JSON.stringify(request.cookies));
        console.log("session", JSON.stringify(request.session));*/
        var token = request.cookies.jwt;
        var csrf = request.session.csrf;
        try {
            var decodedToken = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY);
            if ((decodedToken.admin === true) && csrf) {
                next();
            }
            else {
                response.status(403).end();
            }
        }
        catch (error) {
            response.status(403).end();
        }
    }
}
exports["default"] = default_1;
