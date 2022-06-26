import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

// goal is to conditionally render either the component or a redirect
//  based on whether user is logged in

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/home" /> : <Component {...props} />
        )} //if the user is loggedIn, redirect them to the home page
    />      //else, spread all the props and add them to the component
);

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props =>  (
            loggedIn ? <Component {...props } /> : <Redirect to="/home" />
        )}
    />
);

const mSTP = (state) => ({
    loggedIn: Boolean(state.session.id)
})

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));