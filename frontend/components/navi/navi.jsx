import React from 'react';
import { Link } from 'react-router-dom';

//destructuring currentUser and logout, which are being received
//from the nav container
export default ({ currentUser, logout, openSignupForm, openLoginForm }) => {
  
  //use a ternary to conditionally render the right buttons 
  
  const display = currentUser ? (  //if there is a current user, return this
      <div>
        <h2> Welcome, {currentUser.username}!</h2>
      
        <Link className="home-link" to="/">Home</Link>
        <Link className="account-link" to="/account">Account</Link>
        <button className="logout-btn" onClick={logout}>Log Out</button>
      </div>
  )  
      :  //if there is no currentUser, return the following instead
  (
    <div>
      <button className="login-btn" onClick={openLoginForm}>Log In</button> 
      <button className="signup-btn" onClick={openSignupForm}>Sign Up</button> 
    </div>
  );

  return (
    <header className="nav-bar">
      <Link to="/"> 
        <h1 className="logo">🚶easyStreet</h1>
      </Link>
      <div>
        {display}
      </div>
    </header>
  );
};