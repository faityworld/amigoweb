import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, login, checkUser, ...rest }) {
    checkUser();
    console.log('login: ', login);
    return (
      
      <Route {...rest} render = {props => login === true ? 
            (<Component {...props} />) : 
            (<Redirect to={{ pathname: "/login", state: { from: props.location }}}/>)
        }
      />
    );
  }
export default PrivateRoute;  