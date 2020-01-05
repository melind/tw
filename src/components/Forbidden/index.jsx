"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
require("./index.css");
var react_router_dom_1 = require("react-router-dom");
var Forbidden = function () {
    var _a = react_1.useState(false), redirect = _a[0], setRedirect = _a[1];
    setTimeout(function () {
        setRedirect(true);
    }, 4000);
    if (redirect) {
        return <react_router_dom_1.Redirect to="/home"/>;
    }
    return (<div className="forbidden"> <h1>VIP  ONLY !</h1> <br />
        <img src="https://media.giphy.com/media/Qak0pFjTzg16g0mcxt/giphy.gif" alt="gif d'une salle de cinéma vide avec à l'écran king-kong"/><br />
        <p>“Powered by Giphy” add and the Giphy logo</p>
        </div>);
};
exports["default"] = Forbidden;
