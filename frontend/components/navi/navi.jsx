import React from 'react';
import { Link } from 'react-router-dom';

//destructuring currentUser and logout, which are being received
//from the nav container
export default ({ currentUser, logout, openSignupForm, openLoginForm }) => {
  
  //use a ternary to conditionally render the right buttons 
  
  const display = currentUser ? (  //if there is a current user, return this
      <div>
        <h2> Welcome, {currentUser.username}!</h2>
      
        <Link className="btn" to="/">Home</Link>
        <Link className="btn" to="/account">Account</Link>
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
      <h1 className="logo">EasyStreet</h1>
      <h4>thank you to all my classmates who carried me to this peak 💞</h4>
      <div>
        {display}
      </div>
    </header>
  );
};