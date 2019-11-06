import { combineReducers } from 'redux';

import signup from './signup-reducer';
import login from './login-reducer';
import nav from './nav-reducer';
import account from './account-reducer';

const rootReducer = combineReducers({
    signup,
    login,
    nav,
    account
  
});

export default rootReducer;