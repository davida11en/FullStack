import { connect } from "react-redux";
import { getListings, removeListings } from "../../actions/listings_actions";
import ListingsIndexComponent from "./listings_index";

export const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  listings: Object.values(state.entities.listings),
});

export const mDTP = (dispatch) => ({
  getListings: () => dispatch(getListings()),
  removeListings: () => dispatch(removeListings()),
});

const ListingsIndexContainer = connect(mSTP, mDTP)(ListingsIndexComponent);
export default ListingsIndexContainer;