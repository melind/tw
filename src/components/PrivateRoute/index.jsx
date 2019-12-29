"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var userAPI_1 = require("../../services/userAPI");
var PrivateRoute = function (_a) {
    var Component = _a.component, rest = __rest(_a, ["component"]);
    return (<react_router_dom_1.Route {...rest} //contains the React Router props when the initial component is rendered
     render={function (props) {
        if (userAPI_1["default"].isAuth()) {
            return <Component {...props}/>;
        }
        else {
            return <react_router_dom_1.Redirect to="/"/>;
        }
    }}/>);
};
exports["default"] = PrivateRoute;
