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
        console.log("cookies", JSON.stringify(request.cookies));
        console.log("session", JSON.stringify(request.session));
        var token = request.cookies.jwt;
        var csrf = request.session.csrf;
        console.log("middleware csrf", csrf);
        try {
            var decodedToken = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY);
            console.log({ decodedToken: decodedToken });
            if (decodedToken && csrf) {
                console.log("csrf ", csrf, "token pseudo", decodedToken.nickname);
                next();
            }
            else {
                response.status(401).end();
            }
        }
        catch (error) {
            console.log("auht error", error, error.message);
            response.clearCookie('jwt');
            response.status(401).end();
        }
    }
}
exports["default"] = default_1;
