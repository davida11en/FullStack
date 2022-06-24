import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from "../reducers/root_reducer";

// holds reference to app state, store handles updating state when actions 
// are dispatched and tells necessary components to re-render
const configureStore = (preloadedState = {}) => 
    createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;