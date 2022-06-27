import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import Splash from "../splash/splash";

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

const HomeSplashContainer = connect(mSTP, mDTP)(Splash);

export default HomeSplashContainer;