"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./index.css");
var NotFoundPage = function () {
    return (<div className="notFound">
        <p><react_router_dom_1.Link to="/home">Accueil</react_router_dom_1.Link></p>
        <h1>404 Page Not Found</h1>
        <img src="https://media.giphy.com/media/NnFZysBOEprAA/giphy.gif" alt="gif de projecteur de film tournant"/>
        <p>“Powered by Giphy”</p> 
        </div>);
};
exports["default"] = NotFoundPage;
