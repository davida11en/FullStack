import { connect } from "react-redux";
import { getListings, getListing, removeListings } from "../../actions/listings_actions";
import ListingsIndex from "./listings_index";

const mSTP = (state, ownProps) => {
  console.log('LOOKIN 4 STATE', state);

  return {
    currentUser: state.entities.users[state.session.id],
    listings: Object.values(state.entities.listings),
  }
};

const mDTP = (dispatch) => ({
  getListings: () => dispatch(getListings()),
  getListing: listingId => dispatch(getListing(listingId)),
  removeListings: () => dispatch(removeListings()),
});

const ListingsIndexContainer = connect(mSTP, mDTP)(ListingsIndex);
export default ListingsIndexContainer;