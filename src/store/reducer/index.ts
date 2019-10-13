import { combineReducers } from 'redux';

import signup from './signup-reducer';
import login from './login-reducer';

const rootReducer = combineReducers({
    signup,
    login
  
});

export default rootReducer;