

const stateInitial = { 
    loggedout: false
 };

 export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
 export const LOGOUT_ERROR = "LOGOUT_ERROR";
 export const INIT = "INIT";

const reducer = (state = stateInitial, action: {type: string, payload : any}) => {
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
        case INIT:
            return {
                ...state,
                ...stateInitial,
                loggedout:false,
                error: false

            }
        
        default:
            return state;
    }
}

 


/*-----------    action creator  -------------*/
// function that create actions (= payload = data from the application for the store = update stateInitial)


export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const logoutError = () => ({
    type: LOGOUT_ERROR,
});

export const init = () => ({
    type: INIT
});

export default reducer;