"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
require("./index.css");
var Account = function (_a) {
    var display = _a.display, pseudo = _a.pseudo, mail = _a.mail, password = _a.password, date = _a.date, onClick = _a.onClick, init = _a.init;
    display();
    var _b = react_1.useState(true), subscriber = _b[0], setSubscriber = _b[1];
    date = date.slice(0, 10);
    var handleDelete = function () {
        onClick();
        setSubscriber(false);
        antd_1.message.success('Suppression réussie !');
    };
    var handleInit = function () {
        init();
    };
    if (!subscriber) {
        return <react_router_dom_1.Redirect to="/"/>;
    }
    return (<div className="account">
        <div className="info">
             <img src="../../../images/popcorn.svg" alt="un pot de popcorn"/>
                <h1>Votre compte</h1>
             <img src="../../../images/popcorn.svg" alt="un pot de popcorn"/>
        </div>
        Pseudo: {pseudo} <br /> 
        adresse mail: {mail} <br />
        Date d'inscription: {date} <br /><br /> <br /> 
          
        <react_router_dom_1.Link to="/updatePseudo" onClick={handleInit}>Modifier votre pseudo</react_router_dom_1.Link> <br />
        <react_router_dom_1.Link to="/updateMail" onClick={handleInit}>Modifier votre adresse mail</react_router_dom_1.Link> <br />
        <react_router_dom_1.Link to="/updatePassword" onClick={handleInit}>Modifier votre mot de passe</react_router_dom_1.Link><br />
        <react_router_dom_1.Link to="/home"> Accueil </react_router_dom_1.Link><br /><br />
       
        <antd_1.Popconfirm title="Voulez vous vraiment nous quitter ?" onConfirm={handleDelete} okText="Yes" cancelText="No" className="popconfirm">
            
            <img src="https://media.giphy.com/media/dyJ9XHstowFRC/giphy.gif" alt="gif d'un bonhomme de lumière allant vers la sortie"/>
            Désinscription
         </antd_1.Popconfirm>
          
        <p>“Powered by Giphy”</p>
       
 
  
        </div>);
};
exports["default"] = Account;
