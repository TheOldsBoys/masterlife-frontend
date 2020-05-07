import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';
import isAuth from './Auth'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import uiManage from './common/uiManage'

//import 'normalize.css'

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//Settaggio environment var
//if(process.env.NODE_ENV === 'development')

const store = createStore(uiManage)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
              <PrivateRoute path="/" component={Dashboard}/>
            </Switch>
          </BrowserRouter>
    </Provider>
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
        isAuth() ? (
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