import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

// keeping track of all users
const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // to add action's user to the state
            // and set the key to the id of the user
            return Object.assign({}, state, { [action.currentUser.id]: action.user });
        default:
            return state;
    }
}

export default usersReducer; 