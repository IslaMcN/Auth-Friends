import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/login' component={Login} />
      
      <PrivateRoute path='/friendlist' component={FriendsList}/>
    </div>
  );
}

export default App;
