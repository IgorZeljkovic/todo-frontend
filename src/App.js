import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import NonAuthenticatedRoute from './components/NonAuthenticatedRoute';
import ProtectedRoute from './components/ProtectedRoute';
import TodoList from './components/TodoList'
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Switch>
            <NonAuthenticatedRoute
              path="/register"
              user={ this.props.user }
              component={ RegisterForm }
            />
            <NonAuthenticatedRoute
              path="/login"
              user={ this.props.user }
              component={ LoginForm }
            />
            <ProtectedRoute
              path="/todos"
              user={ this.props.user }
              component={ TodoList }
            />
            <Redirect from="/" to="todos" />
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);