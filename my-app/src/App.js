// import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react'
import { Switch, Route, withRouter/* , Redirect */ } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import TaskPage from './components/TaskPage'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/tasks" component={TaskPage} />
          <Route path="/user" component={UserPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App);
