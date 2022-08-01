import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import listingErrorsReducer from "./listing_errors_reducer";

// handles our errors slice of our app state
const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    listings: listingErrorsReducer,

})

export default errorsReducer;