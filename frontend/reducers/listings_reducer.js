import {
    RECEIVE_LISTINGS,
    RECEIVE_LISTING,
    CLEAR_LISTINGS,
  } from "../actions/listings_actions";
  
  const emptyListings = null;
  
  export const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
  
    switch (action.type) {
      case RECEIVE_LISTINGS:
        Object.assign(nextState, action.listings);
        return nextState;
      case RECEIVE_LISTING:
        nextState[action.listing.id] = action.listing;
        return nextState;
      case CLEAR_LISTINGS:
        return Object.assign({}, emptyListings);
      default:
        return state;
    }
  };
  export default listingsReducer;