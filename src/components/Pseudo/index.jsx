"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
require("./index.css");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
// component = function return element to display
var Pseudo = function (_a) {
    var pseudo = _a.pseudo, update = _a.update, error = _a.error, onSubmit = _a.onSubmit, init = _a.init;
    init();
    var _b = react_1.useState({ pseudo: pseudo }), formState = _b[0], setFormState = _b[1];
    var handleChange = function (e) {
        var _a;
        var name = e.target.name;
        var value = e.target.value;
        setFormState(__assign(__assign({}, formState), (_a = {}, _a[name] = value, _a))); // name_input : input_value
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        onSubmit(formState);
    };
    if (update)
        return <react_router_dom_1.Redirect to="/account"/>;
    return (<div className="setAccount">
        <h1>Modifier votre pseudo</h1>
        <react_router_dom_1.Link to="/account" className="return">  Retour </react_router_dom_1.Link>
         <form onSubmit={handleSubmit} action="/updatePseudo" method="POST">
          <antd_1.Input className="input" name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></antd_1.Input>
         
          <button type="submit"><img src="../../../images/clap2.png" alt="un clap de cinéma "/></button>

          <p> {error}</p>

        </form>
        
        </div>);
};
exports["default"] = Pseudo;
