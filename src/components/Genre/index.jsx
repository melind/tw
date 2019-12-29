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
require("./index.css");
var movieAPI_1 = require("../../services/movieAPI");
var antd_1 = require("antd");
var Genres = function (props) {
    var _a = react_1.useState([]), movies = _a[0], setMovies = _a[1];
    var _b = react_1.useState([]), genre = _b[0], setGenre = _b[1];
    var _c = react_1.useState(), pages = _c[0], setPages = _c[1];
    var _d = react_1.useState(1), page = _d[0], setPage = _d[1];
    /*------------------movie genre------------------------*/
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
    /*------------------movies by genre list------------------------*/
    var id = props.match.params.id;
    function moviesByGenreList() {
        return __awaiter(this, void 0, void 0, function () {
            var genreMovies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, movieAPI_1["default"].moviesByGenres(id, page)
                            .then(function (res) {
                            return res.data;
                        })["catch"](function (err) {
                        })];
                    case 1:
                        genreMovies = _a.sent();
                        setMovies(genreMovies.moviesGenre.results);
                        setPages(genreMovies.moviesGenre.total_pages);
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        listOfGenres();
    }, []);
    react_1.useEffect(function () {
        moviesByGenreList();
    }, [page]);
    var onChange = function (page) {
        setPage(page);
    };
    var Meta = antd_1.Card.Meta;
    return (<div className="genreMovie">
      <div className="acc"><react_router_dom_1.Link to="/home">Accueil</react_router_dom_1.Link> </div>

      <antd_1.Card title={genre.map(function (result) { return (result.id != id) ? "" : result.name; })} className="card">
      {movies.map(function (result) {
        return <react_router_dom_1.Link to={"/media/movie/" + result.id} target="_parent" key={result.id}>

              <antd_1.Card.Grid className="grid" key={result.id}>
                <img src={"https://image.tmdb.org/t/p/w500" + result.poster_path} alt="affiche de film"/>
                <Meta title={result.title}/>
              </antd_1.Card.Grid>

          </react_router_dom_1.Link>;
    })}
          </antd_1.Card>
         <div className="pagination"><antd_1.Pagination className="pagination" current={page} total={pages} onChange={onChange}/></div>
         <antd_1.BackTop>
           <div className="up">UP</div>
         </antd_1.BackTop>
      </div>);
};
exports["default"] = Genres;
