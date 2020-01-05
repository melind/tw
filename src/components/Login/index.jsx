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
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
require("./index.css");
var Login = function (_a) {
    var pseudo = _a.pseudo, password = _a.password, loggedin = _a.loggedin, subscriber = _a.subscriber, onSubmit = _a.onSubmit, error = _a.error, init = _a.init;
    setTimeout(function () {
        init();
    }, 1000);
    var _b = react_1.useState({ pseudo: pseudo, password: password, loggedin: loggedin, subscriber: subscriber }), formState = _b[0], setFormState = _b[1];
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
    if (loggedin)
        return <react_router_dom_1.Redirect to="/home"/>;
    return (<div className="form"> 

        <h1>Connectez-Vous</h1><br />
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Pseudo :  </label><antd_1.Input className="input" id="pseudo" name="pseudo" placeholder="Entrer votre pseudo" onChange={handleChange} value={formState.pseudo} required></antd_1.Input> <br /><br />
        <label htmlFor="password">Mot de passe : </label><antd_1.Input className="input" id="password" name="password" type="password" placeholder="Entrer votre mot de passe" onChange={handleChange} value={formState.password} required></antd_1.Input> <br /><br /><br />
          <antd_1.Button htmlType="submit">Valider</antd_1.Button>
          <p>{error}<br />  
            <a href="/signup">Pas encore inscrit ?</a>
          </p> 
        </form>
        
        </div>);
};
exports["default"] = Login;
