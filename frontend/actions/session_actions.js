import * as SessionApiUtil from "../util/session_api_util";

// regular action creators
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

// thunk action creators
export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  SessionApiUtil.login(user).then(user => (
      dispatch(receiveCurrentUser(user))
  ), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(user => (
      dispatch(logoutCurrentUser())
  ))
);