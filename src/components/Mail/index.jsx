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
var validationMail_1 = require("../../lib/validationMail");
var antd_1 = require("antd");
// component = function return element to display
var Mail = function (_a) {
    var mail = _a.mail, update = _a.update, error = _a.error, onSubmit = _a.onSubmit, init = _a.init;
    init();
    var _b = react_1.useState({ mail: mail }), formState = _b[0], setFormState = _b[1];
    var handleChange = function (e) {
        var _a;
        var name = e.target.name;
        var value = e.target.value;
        setFormState(__assign(__assign({}, formState), (_a = {}, _a[name] = value, _a))); // name_input : input_value
    };
    var result = validationMail_1["default"](formState);
    var handleSubmit = function (e) {
        e.preventDefault();
        if (!result[0]) {
            onSubmit(formState);
        }
    };
    if (update)
        return <react_router_dom_1.Redirect to="/account"/>;
    return (<div className="setAccount">
        <h1>Modifier votre e-mail</h1>
        <react_router_dom_1.Link to="/account" className="return"> Retour </react_router_dom_1.Link>
         <form onSubmit={handleSubmit} action="/updateMail" method="POST">
          <antd_1.Input className="input" name="mail" placeholder="Entrer votre mail" onChange={handleChange} value={formState.mail} required></antd_1.Input>
         
          <button type="submit"><img src="../../../images/clap2.png" alt="un clap de cinéma "/></button>

          <p> {result}  {error}</p>
        </form>
        
        </div>);
};
exports["default"] = Mail;
