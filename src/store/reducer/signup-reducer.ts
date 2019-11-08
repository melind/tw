
import userAPI from '../../services/userAPI';

const stateInitial = { 
    pseudo: '',
    mail: '',
    password: '',
    subscriber: false,
 };

 export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
 export const SIGNUP_ERROR = "SIGNUP_ERROR";
 export const INIT = "INIT";

const reducer = (state = stateInitial, action : {type: string, payload : any}) => {
    switch(action.type){
        case SIGNUP_SUCCESS: 
            return {
                ...state, // = stateInitial
                ...action.payload,// = overwrite stateInitial with data frop appli
                subscriber: true,
                error: false

            }
        case SIGNUP_ERROR:
            return {
                ...state,
                subscriber: false,
                error: "Inscription non réussi",

            }
        case INIT:
            return {
                ...state,
                ...stateInitial,
                subscriber:false,
                error: false

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
   const { signup } = getState();
    console.log("state dfrom reducer: ", signup, "state from component: ", formState);
    // axios collect post info from the user via name input
    return  userAPI.signupUser(formState)
        .then( (res) => {
            // inform my reducer this is a success 
            //and take data from response of auhtController.postSignup
            
            console.log("data collected: ",  res.data);
            dispatch(signupSuccess(res.data));
        })
        .catch(err => {
            // inform my reducer there is an error
            console.log(err);
            if (err.response.data.error.keyValue.pseudo || err.response.data.error.keyValue.mail) {
                alert((err.response.data.error.keyValue.pseudo ||  err.response.data.error.keyValue.mail) + " existe déjà!");
                }
            //console.log( err.response.data.error.keyValue.pseudo, err.response.data.error.keyValue.mail );
            dispatch(signupError());
        });
};

/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store = update stateInitial)



export const signupSuccess = (payload) => ({
    type: SIGNUP_SUCCESS,
    payload
});

export const signupError = () => ({
    type: SIGNUP_ERROR,
});

export const init = () => ({
    type: INIT
});
export default reducer;