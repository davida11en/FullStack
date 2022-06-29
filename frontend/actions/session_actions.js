import { postUser, postSession, deleteSession} from  '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// type and payload for reducers

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

// thunk action creators for the containers

//postUser is an ajax request (in api util file) that returna a promise
export const createNewUser = (newUser) => dispatch => 
    postUser(newUser)
    .then(user => {
        console.log('LOOKING FOR USER', user)
        dispatch(receiveCurrentUser(user))
    },
         err => dispatch(receiveErrors(err)) );

export const login = (formUser) => dispatch => 
    postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
         err => dispatch(receiveErrors(err)) );

//thunk action creaters must be arrow functions if they take no args
export const logout = () => dispatch => 
    deleteSession()
    .then( () => dispatch(logoutCurrentUser()), 
        err => dispatch(receiveErrors(err)) );