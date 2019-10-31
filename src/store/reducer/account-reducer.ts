
import userAPI from '../../services/userAPI';

const stateInitial = { 
    pseudo: '',
    mail: '',
    password: '',
    date: ''
 };

 export const ACCOUNT_SUCCESS = "ACCOUNT_SUCCESS";
 export const ACCOUNT_ERROR = "ACCOUNT_ERROR";
 export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
 export const UPDATE_ERROR = "UPDATE_ERROR";

const reducer = (state = stateInitial, action : {type: string, payload : any}) => {
    switch(action.type){
        case ACCOUNT_SUCCESS: 
            return {
                ...state, // = stateInitial
                ...action.payload,// = overwrite stateInitial with data from appli
                error: false

            }
        case ACCOUNT_ERROR:
            return {
                ...state,
                error: "affichage non réussi",

            }

        case UPDATE_SUCCESS: 
            return {
                ...state, 
                ...action.payload,

            }
        case UPDATE_ERROR:
            return {
                ...state,
                error: "mise à jour non réussi",

            }
        default:
            return state;
    }
}

        /*-----------    redux thunk  -------------*/
        // action creator which return function
export const DisplayAccount = () => (dispatch, getState) => {
    // name of the input
    // collect user info of the stateInitial
    // state.A CCOUNT
    const { account } = getState();
    console.log("state du reducer: ", account);
    // axios collect post info from the user via name input
    return  userAPI.infoUser()
        .then( (res) => {
            // inform my reducer this is a success 
            //and take data from response of accountController.displayAccount
            
            console.log("data collected: ",  res.data);
            dispatch(ACCOUNTSuccess(res.data));
        })
        .catch(err => {
            // inform my reducer there is an error
            console.log(err);
            dispatch(ACCOUNTError());
        });
};

export const AccountUpdate = (formState) => (dispatch, getState) => {
    // name of the input
    // collect user info of the stateInitial
    // state.A CCOUNT
    const { account } = getState();
    console.log("state du reducer: ", account, "state provenent du composant: ", formState);
    // axios collect post info from the user via name input
    return  userAPI.updateUser(formState)
        .then( (res) => {
            // inform my reducer this is a success 
            //and take data from response of accountController.updateAccount
            
            console.log("data collected: ",  res.data);
            dispatch(UPDATESuccess(res.data));
        })
        .catch(err => {
            // inform my reducer there is an error
            console.log(err);
            dispatch(UPDATEError());
        });
};
/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store = update stateInitial)



export const ACCOUNTSuccess = (payload) => ({
    type: ACCOUNT_SUCCESS,
    payload
});

export const ACCOUNTError = () => ({
    type: ACCOUNT_ERROR,
});

export const UPDATESuccess = (payload) => ({
    type: ACCOUNT_SUCCESS,
    payload
});

export const UPDATEError = () => ({
    type: ACCOUNT_ERROR,
});
export default reducer;