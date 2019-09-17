import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
