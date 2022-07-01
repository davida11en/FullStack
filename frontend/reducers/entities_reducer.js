import usersReducer from "./users_reducer";
import { combineReducers } from "redux";
import listingsReducer from './listings_reducer';

// contains seperate sub slices for each of our resources
const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer
})

export default entitiesReducer;