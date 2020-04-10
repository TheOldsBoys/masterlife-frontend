import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

console.log("window.React1 === window.React2");


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Switch>
   <Route exact path="/login">
            <SignIn/>
        </Route>
        <Route path="/signup">
          <SignUp/>
          </Route>
				<PrivateRoute path="/">
           <Dashboard /> 
        </PrivateRoute>
			  </Switch>
			</BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        false ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}