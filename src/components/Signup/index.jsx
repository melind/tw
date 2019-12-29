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
var validation_1 = require("../../lib/validation");
var antd_1 = require("antd");
// component = function return element to display
var Signup = function (_a) {
    var pseudo = _a.pseudo, mail = _a.mail, password = _a.password, subscriber = _a.subscriber, onSubmit = _a.onSubmit, error = _a.error, init = _a.init;
    setTimeout(function () {
        init();
    }, 1000);
    var _b = react_1.useState({ pseudo: pseudo, mail: mail, password: password, subscriber: subscriber }), formState = _b[0], setFormState = _b[1];
    var handleChange = function (e) {
        var _a;
        var name = e.target.name;
        var value = e.target.value;
        setFormState(__assign(__assign({}, formState), (_a = {}, _a[name] = value, _a))); // name_input : input_value
    };
    var result = validation_1["default"](formState);
    var handleSubmit = function (e) {
        e.preventDefault();
        if (result[0] === undefined && result[2] === undefined) {
            onSubmit(formState);
        }
    };
    if (subscriber)
        return <react_router_dom_1.Redirect to="/login"/>;
    return (<div className="form">

        <h1>Inscrivez-vous</h1><br />

         <form onSubmit={handleSubmit} action="/signup" method="POST">
          <label htmlFor="pseudo">Pseudo : </label><antd_1.Input className="input" id="pseudo" name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></antd_1.Input> <br />
          <label htmlFor="mail">E-mail : </label><antd_1.Input className="input" id="mail" name="mail" placeholder="Entrer votre e-mail" onChange={handleChange} value={formState.mail} required></antd_1.Input> <br />
          <label htmlFor="password"> Mot de passe : </label><antd_1.Input className="input" id="password" name="password" type="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password} required></antd_1.Input> <br /><br />
          <antd_1.Button htmlType="submit">Valider</antd_1.Button>
          <p>  <br />{result[0]} <br /> {result[2]} {error} <br />
            <react_router_dom_1.Link to="/login">Déjà inscrit ?</react_router_dom_1.Link>
          </p>
        </form>
        
        </div>);
};
exports["default"] = Signup;
