import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Signin from './auth/Signin';
import Jokes from './jokes/Jokes';
// import Redirect from './redirect/Redirect';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          {localStorage.getItem('token') && (
            <button className="button__signout" onClick={this.signout}>Sign out</button>
          )}
        </header>
        {/* <Route exact path='/' component={Redirect} /> */}
        <Route path='/signin' component={Signin} />
        <Route path='/jokes' component={Jokes} />
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/signin')
  }
}

export default withRouter(App);