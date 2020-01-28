"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var movieAPI_1 = require("../../services/movieAPI");
require("./index.css");
var antd_1 = require("antd");
var Media = function (props) {
    var _a = react_1.useState([]), medias = _a[0], setMedias = _a[1];
    var media = props.match.params.media;
    var id = props.match.params.id;
    function mediaDetails() {
        return __awaiter(this, void 0, void 0, function () {
            var details;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, movieAPI_1["default"].media(media, id)
                            .then(function (res) {
                            return res.data;
                        })["catch"](function (err) {
                        })];
                    case 1:
                        details = _a.sent();
                        setMedias(details.mediaDetails);
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        mediaDetails();
    }, []);
    return (<div className="media" style={{ backgroundImage: "url()", backgroundSize: 'cover' }}> 
            <p><react_router_dom_1.Link to="/home">Accueil</react_router_dom_1.Link></p><p><a href="javascript:history.go(-1)">Retour</a></p>
            <h1>Média </h1>
            
        <antd_1.Card> 
            <antd_1.Card.Grid className=" m"><img src={medias["profile_path"] ? "https://image.tmdb.org/t/p/w500/" + medias["profile_path"] : "https://image.tmdb.org/t/p/w500/" + medias["backdrop_path"]} alt="du média sélectionné"/>
            <antd_1.Rate />
            </antd_1.Card.Grid>
            <p>  {medias["name"] ? medias["name"] : medias["title"]} {medias["release_date"] ? medias["release_date"] : ""} <br /> <br /> {medias["biography"] ? medias["biography"] : medias["overview"]} </p>
        
        </antd_1.Card>
    </div>);
};
exports["default"] = Media;
