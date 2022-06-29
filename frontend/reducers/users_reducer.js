import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {RECEIVE_ALL_USERS , RECEIVE_USER } from "../actions/users_actions"
// keeping track of all users
const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
        case RECEIVE_USER:
        //     console.log('looking for state11', state)
        //     console.log('looking for action11', action)

            return Object.assign( {}, state, { [action.user.id]: action.user });
        case RECEIVE_ALL_USERS:
            // console.log('looking for state22', state)
            // console.log('looking for action22', action)
                return Object.assign( {}, action.users, state);
        default:
            // console.log('looking for state33', state)
            // console.log('looking for action33', action)
            return state;
    }
}

export default usersReducer; 