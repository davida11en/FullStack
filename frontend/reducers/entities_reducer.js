import usersReducer from "./users_reducer";
import { combineReducers } from "redux";

// contains seperate sub slices for each of our resources
const entitiesReducer = combineReducers({
    users: usersReducer
})

export default entitiesReducer;