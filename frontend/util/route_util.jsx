import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

// goal is to conditionally render either the component or a redirect
//  based on whether user is logged in

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route 
        path={path}
        exact={exact}
        render={(props) => 
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />  
        }
    />
)

const mSTP = state => {
    return { loggedIn: Boolean(state.session.id) }
}

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));