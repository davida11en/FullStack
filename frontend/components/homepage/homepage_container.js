import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
// import Splash from "../splash/splash";
import homePage from "../homepage/homepage";


export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

const HomePageContainer = connect(mSTP, mDTP)(homePage);

export default HomePageContainer;