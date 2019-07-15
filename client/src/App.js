import React, { Fragment } from 'react';
import './App.css';

import About from './components/pages/About';
import Alerts from './components/layout/Alerts';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import NavBar from './components/layout/NavBar';
import Register from './components/auth/Register';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlertState from './context/alert/AlterState';
import AuthState from './context/auth/AuthState';
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment className="App">
              <NavBar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
