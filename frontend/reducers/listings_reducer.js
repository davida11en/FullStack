import {
    RECEIVE_LISTINGS,
    RECEIVE_LISTING,
    CLEAR_LISTINGS,
    CLEAR_LISTING
  } from "../actions/listings_actions";
  
const emptyListings = null;
  
const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
  
    switch (action.type) {
      case RECEIVE_LISTINGS:
        nextState = Object.assign(nextState, action.listings);
        // console.log('looking for listings', listings)
        // listings.forEach((listing) => {
        //   nextState[listing.id] = listing;
        // });

        // nextState[listing.id] = listing;
        return nextState;
      case RECEIVE_LISTING:
        console.log('listing action ', action)
        nextState[action.listing.id] = action.listing;
        
        return nextState;
      case CLEAR_LISTINGS:
        return Object.assign({}, emptyListings);
      case CLEAR_LISTING:
          delete nextState[action.listingId];
          return nextState;
      default:
        return state;
    }
  };
  export default listingsReducer;