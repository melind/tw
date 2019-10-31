import { combineReducers } from 'redux';

import signup from './signup-reducer';
import login from './login-reducer';
import account from './account-reducer';

const rootReducer = combineReducers({
    signup,
    login,
    account
  
});

export default rootReducer;