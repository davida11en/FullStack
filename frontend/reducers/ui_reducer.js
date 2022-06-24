import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";

// this slice will hold information that affects how the user interacts with our app
// but it is not relational data from our database
const uiReducer = combineReducers({
  modal: modalReducer,
});

export default uiReducer;