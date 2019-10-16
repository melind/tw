
import userAPI from '../../services/userAPI';

const stateInitial = { 
    pseudo: '',
    mail: '',
    password: '',
    subscriber: false,
    loggedin: false
 };

 export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
 export const SIGNUP_ERROR = "SIGNUP_ERROR";
 export const SIGNUP = "SIGNUP";


const reducer = (state = stateInitial, action : {type: string, payload: any}) => {
    switch(action.type){
         case SIGNUP:
            return {
                ...state,
                ...action.payload // = overwrite stateInitial with data frop appli
            }
        case SIGNUP_SUCCESS: 
            return {
                ...state, // = stateInitial
                ...action.payload, // = overwrite stateInitial with data frop appli
                subscriber: true,
                loggedin: true,
                error: false

            }
        case SIGNUP_ERROR:
            return {
                ...state,
                error: "Inscription non réussi",

            }

        default:
            return state;
    }
}

        /*-----------    redux thunk  -------------*/
        // action creator which return function
export const signUp = (formState) => (dispatch, getState) => {
    // name of the input
    // collect user info of the stateInitial
    // state.signup
    const { signup } = getState();//ou getState().signup
    console.log("signup (state du reducer): ", signup);
    // axios collect post info from the user via name input
    return userAPI.signupUser(formState)
        .then(res => {
            // inform my reducer this is a success
            console.log("data collected: ", res.data);
            dispatch(signupSuccess(res.data));
        })
        .catch(err => {
            // inform my reducer there is an error
            console.log(err);
            dispatch(signupError());
        })
};

/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store = update stateInitial)

//export const handleSubmit = (payload) => ({
//    type: ON_CHANGE,
//    payload
//})

export const signupSuccess = (payload) => ({
    type: SIGNUP_SUCCESS,
    payload
});

export const signupError = () => ({
    type: SIGNUP_ERROR,
});

export default reducer;