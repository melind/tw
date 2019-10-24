
import userAPI from '../../services/userAPI';

const stateInitial = { 
    pseudo: '',
    password: '',
    loggedin: false,
    subscriber: false,
 };

 export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
 export const LOGIN_ERROR = "LOGIN_ERROR";

const reducer = (state = stateInitial, action : {type: string, payload: any}) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,// = stateInitial
                ...action.payload,// = overwrite stateInitial with data frop appli
                loggedin: true,
                subscriber: true,
                error: false,

            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: "Connexion échoué",

            }

        default:
            return state;
    }
};
        /*-----------    redux thunk  -------------*/
        // action creator which return function
export const login = (formState) => (dispatch, getState) => {
    // collect user info of the stateInitial
    // state.login
   // const { login } = getState();
    // axios check post info from the user
    return userAPI.loginUser(formState)
        .then(res => {
            // inform my reducer this is a success
            //and take data from response of auhtController.postLogin
            console.log("data collected :", res.data);
            dispatch(signSuccess(res.data));
        })
        .catch(err => {
            // inform my reducer there is an error
            console.log(err);
            dispatch(signError());
        })
};
/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store)
export const signSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});

export const signError = () => ({
    type: LOGIN_ERROR,
});




export default reducer;