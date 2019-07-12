import React, { Fragment } from 'react';
import './App.css';

import About from './components/pages/About';
import Home from './components/pages/Home';
import NavBar from './components/layout/NavBar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment className="App">
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
