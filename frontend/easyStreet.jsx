import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    
    // bootstrapping current user, then delete for security
    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: {
            [window.currentUser.id]: window.currentUser
          },
        },
        session: {
          id: window.currentUser.id
        }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
  
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  
    // rendering app in root container
    ReactDOM.render(<Root store={store} />, root);
})