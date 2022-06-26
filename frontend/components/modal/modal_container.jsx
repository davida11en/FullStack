import { connect } from "react-redux";
import Modal from "./modal";
import { clearErrors } from "../../actions/session_actions";

const mSTP = (state) => ({
  errors: state.errors.session
});

const mDTP = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(Modal);