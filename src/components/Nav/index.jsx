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
require("./index.css");
var react_router_dom_1 = require("react-router-dom");
var userAPI_1 = require("../../services/userAPI");
var movieAPI_1 = require("../../services/movieAPI");
var antd_1 = require("antd");
var Nav = function (_a) {
    var loggedout = _a.loggedout, onClick = _a.onClick, init = _a.init;
    init();
    var logOut = function () {
        userAPI_1["default"].logOut();
        onClick();
    };
    var _b = react_1.useState([]), genre = _b[0], setGenre = _b[1];
    var _c = react_1.useState([]), genreTv = _c[0], setGenreTv = _c[1];
    var _d = react_1.useState(""), search = _d[0], setSearch = _d[1];
    var _e = react_1.useState([]), searchMediaResult = _e[0], setSearchMediaResult = _e[1];
    var handleChange = function (event) {
        setSearch(event.target.value);
        searchMedia(search);
    };
    /*------------------movie genres------------------------*/
    function listOfGenres() {
        return __awaiter(this, void 0, void 0, function () {
            var listGenres;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, movieAPI_1["default"].genres()
                            .then(function (res) {
                            return res.data;
                        })["catch"](function (err) {
                        })];
                    case 1:
                        listGenres = _a.sent();
                        setGenre(listGenres.genres.genres);
                        return [2 /*return*/];
                }
            });
        });
    }
    /*------------------tv shows genres------------------------*/
    function listOfTvGenres() {
        return __awaiter(this, void 0, void 0, function () {
            var listGenres;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, movieAPI_1["default"].genresTv()
                            .then(function (res) {
                            return res.data;
                        })["catch"](function (err) {
                        })];
                    case 1:
                        listGenres = _a.sent();
                        setGenreTv(listGenres.genres.genres);
                        return [2 /*return*/];
                }
            });
        });
    }
    /*------------------ search bar ------------------------*/
    function searchMedia(search) {
        return __awaiter(this, void 0, void 0, function () {
            var searchMedias;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, movieAPI_1["default"].search({ "search": search })
                            .then(function (res) {
                            return res.data.media.results;
                        })["catch"](function (err) {
                        })];
                    case 1:
                        searchMedias = _a.sent();
                        setSearchMediaResult(searchMedias);
                        return [2 /*return*/];
                }
            });
        });
    }
    /*------------------ search bar effect ------------------------*/
    var show = function () {
        var film = document.getElementsByClassName('selected')[0];
        var serie = document.getElementsByClassName('selected')[1];
        var acteur = document.getElementsByClassName('selected')[2];
        var res = document.getElementsByClassName('res')[0];
        film.style.display = 'block';
        serie.style.display = 'block';
        acteur.style.display = 'block';
        res.style.display = 'block';
    };
    var hide = function () {
        var film = document.getElementsByClassName('selected')[0];
        var serie = document.getElementsByClassName('selected')[1];
        var acteur = document.getElementsByClassName('selected')[2];
        var res = document.getElementsByClassName('res')[0];
        film.style.display = 'none';
        serie.style.display = 'none';
        acteur.style.display = 'none';
        res.style.display = 'none';
    };
    var selectedFilm = function (event) {
        if (document.getElementById('#film')) {
            var selectedMovie = document.getElementById('#film')[0];
            selectedMovie.style.display = 'block';
            var selectedTv = document.getElementById('#serie')[0];
            selectedTv.style.display = 'none';
        }
    };
    var selectedSerie = function (event) {
        if (document.getElementById('#serie')) {
            var selectedTv = document.getElementById('#serie')[0];
            selectedTv.style.display = 'block';
            var selectedMovie = document.getElementById('#film')[0];
            selectedMovie.style.display = 'none';
        }
    };
    react_1.useEffect(function () {
        listOfGenres();
        listOfTvGenres();
    }, []);
    react_1.useEffect(function () {
        searchMedia(search);
    }, [search]);
    if (loggedout)
        return <react_router_dom_1.Redirect to="/"/>;
    var SubMenu = antd_1.Menu.SubMenu;
    return (<antd_1.Menu className="nav">
          
        <antd_1.Menu.Item className="oscar">  
                <react_router_dom_1.Link to="/admin"><img src="../../../images/oscar.png" alt="un oscar avec des rouleaux de diapositives de film en arrière plan"/></react_router_dom_1.Link>
        </antd_1.Menu.Item>  
       
        
            <SubMenu title="Film par genre" className="genres"> 
                <antd_1.Menu.ItemGroup className="genre"> 
                    {genre.map(function (result) {
        return <antd_1.Menu.Item key={result.id}>
                             <react_router_dom_1.Link to={"/genre/" + result.id} target="_parent" key={result.id}>
                                 {result.name} 
                             </react_router_dom_1.Link>
                          </antd_1.Menu.Item>;
    })}
                </antd_1.Menu.ItemGroup>
            </SubMenu>
   
      
            <SubMenu title="Série par genre" className="genres"> 
                 <antd_1.Menu.ItemGroup className="genre"> 
                    {genreTv.map(function (result) {
        return <antd_1.Menu.Item className="genre" key={result.id}>
                             <react_router_dom_1.Link to={"/genretv/" + result.id} target="_parent" key={result.id}>
                                {result.name}
                            </react_router_dom_1.Link>
                        </antd_1.Menu.Item>;
    })}
                </antd_1.Menu.ItemGroup>
            </SubMenu>
       
         
        <antd_1.Menu className="search-container">
                <form action="" method="POST ">
                    <div className="searchplace" onMouseOut={hide} onClick={show} onMouseOver={show}>
                        <img src="../../../images/projecteur.png" alt="un projecteur de film"/><antd_1.Input placeholder="Recherche de films/séries/aceurs..." value={search} onChange={handleChange} onClick={show}/>
                    
                        <div className="res">
                        <antd_1.Menu className="selectoption">
                        <a href="#film" className="selected" onClick={selectedFilm}><div>Film</div></a>
                        <a href="#serie" className="selected" onClick={selectedSerie}><div>Série</div></a>
                        <a href="#actor" className="selected"><div>Acteur</div></a>
                        </antd_1.Menu>
                       
                         <antd_1.List className="result" header="film" id="film">{searchMediaResult && searchMediaResult.map((function (result) {
        return result["media_type"] === "movie" ? (<react_router_dom_1.Link to={"/media/" + result.media_type + "/" + result.id} target="_parent" key={result.id}>
                             <antd_1.List.Item className="li">{result.title}</antd_1.List.Item></react_router_dom_1.Link>) : "";
    }))}
                        </antd_1.List>
                       

                         <antd_1.List className="result" header="série" id="serie">{searchMediaResult && searchMediaResult.map((function (result) {
        return result["media_type"] === "tv" ? (<react_router_dom_1.Link to={"/media/" + result.media_type + "/" + result.id} target="_parent" key={result.id}>
                             <antd_1.List.Item className="li">{result.original_name}</antd_1.List.Item></react_router_dom_1.Link>) : "";
    }))}
                         </antd_1.List>

 
                         <antd_1.List className="result" header="acteur" id="actor">{searchMediaResult && searchMediaResult.map((function (result) {
        return result["media_type"] === "person" ? (<react_router_dom_1.Link to={"/media/" + result.media_type + "/" + result.id} target="_parent" key={result.id}>
                             <antd_1.List.Item className="li">{result.name}</antd_1.List.Item></react_router_dom_1.Link>) : "";
    }))}
                        </antd_1.List>
    </div>
                    </div>
             </form>
      
         </antd_1.Menu> 
    <antd_1.List className="user"> 
       <antd_1.List.Item className="t"> <img src="../../../images/star.png" alt="icone d'une étoile jaune"/></antd_1.List.Item>
       <antd_1.List.Item className="t"> <react_router_dom_1.Link to="/account">Mon compte</react_router_dom_1.Link>  </antd_1.List.Item>
       <antd_1.List.Item className="t"> <react_router_dom_1.Link to="/" onClick={logOut}>déconnectez-vous</react_router_dom_1.Link></antd_1.List.Item>
    </antd_1.List>
       
    </antd_1.Menu>);
};
exports["default"] = Nav;
