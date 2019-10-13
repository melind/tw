
import userAPI from '../../services/userAPI';

const stateInitial = { 
    pseudo: '',
    mail: '',
    password: '',
    subscriber: false,
 };

 export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
 export const SIGNUP_ERROR = "SIGNUP_ERROR";


const reducer = (state = stateInitial, action : {type: string, payload: any}) => {
    switch(action.type){
        case SIGNUP_SUCCESS: 
            return {
                ...state, // = stateInitial
                ...action.payload, // = overwrite stateInitial with data frop appli
                subscriber: true,
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
export const signUp = (name) => (dispatch, getState) => {
    // name of the input
    // collect user info of the stateInitial
    // state.signup
    const { signup } = getState().signup;//ou getState()
    console.log("signup (state du reducer): ", signup);
    // axios collect post info from the user via name input
    return userAPI.signupUser(name, signup)
        .then(res => {
            // inform my reducer this is a success
            console.log("data collected: ", res.data);
            dispatch(signSuccess(res.data));
        })
        .catch(err => {
            // inform my reducer there is an error
            console.log(err);
            dispatch(signError());
        })
};

/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store = update stateInitial)
export const signSuccess = (payload) => ({
    type: SIGNUP_SUCCESS,
    payload
});

export const signError = () => ({
    type: SIGNUP_ERROR,
});

export default reducer;