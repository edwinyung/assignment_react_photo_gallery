import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import users from './users.js';
import UsersOrder from './filter.js';

const Gallery = ({ users }) => {
  return (
    <div className="display">
      {users.map(user => {
        return <User user={user} />;
      })}
    </div>
  );
};

const User = ({ user }) => {
  return (
    <div className="userBox col-xs-2">
      <a href={user.html_url}>{user.login}</a>
      <img src={user.avatar_url} />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersOrder />
        <Gallery users={users} />
      </div>
    );
  }
}

export default App;
