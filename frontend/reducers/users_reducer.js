import { RECEIVE_CURRENT_USER } from "../actions/sessions_actions";

const userReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
}

export default userReducer;