import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer';


const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;