

const stateInitial = { 
    loggedout: false
 };

 export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
 export const LOGOUT_ERROR = "LOGOUT_ERROR";

const reducer = (state = stateInitial, action : {type: string, payload : any}) => {
    switch(action.type){
        case LOGOUT_SUCCESS: 
            return {
                ...state, 
                loggedout: true,
                error: false

            }
        case LOGOUT_ERROR:
            return {
                ...state,
                loggedout: false,
                error: "Déconnexion non réussi",

            }
        default:
            return state;
    }
}

 


/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store = update stateInitial)



export const logoutSuccess = (payload) => ({
    type: LOGOUT_SUCCESS,
    payload
});

export const logoutError = () => ({
    type: LOGOUT_ERROR,
});

export default reducer;