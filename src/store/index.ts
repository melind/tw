import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer';


// J'importe monh middleware
// import testMiddleware from './test-middleware';
// import dateMiddleware from './date-middleware';
// import promiseMiddleware from './promise-middleware';
// J'utilise applyMiddleware pour que redux le formatte selon ses besoins
//const myMiddleware = applyMiddleware(ReduxThunk);

//let allMiddlewaresToUse;
//if (process.env.NODE_ENV === 'development') {
    // Je vérifie la présence de l'extension devtools
    // et si présente, je stocke dans un array tous les 
    // middlewares qu'elle me retourne
   // const devTools = [];
   // window.__REDUX_DEVTOOLS_EXTENSION__ && devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__());

    // J'utilise compose pour fusionner tous ces middlewares
    // en un seul (un peu comme le combineReducer)
//    allMiddlewaresToUse = compose( myMiddleware, ...devTools)
//} else {
//    allMiddlewaresToUse = myMiddleware;
//}





// Je peux donner tous mes middlewares en 2eme argument de createStore
//const store = createStore(rootReducer, allMiddlewaresToUse );
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;