import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
    id: null
}

// keeps track of our current user
const sessionReducer = ( state = {}, action ) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id});
        case LOGOUT_CURRENT_USER: 
            return Object.assign(_nullSession);
        default:
            return state; 
    }
} 

export default sessionReducer;