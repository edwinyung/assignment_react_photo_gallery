import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import users from './users.js';
import SortButton from './filter.js';
import PageCounter from './pageCounter.js';
import Search from './pageCounter.js';

const Gallery = ({ users, usersFilter }) => {
  let users = users.exec(usersFilter)
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
  constructor() {
    super();
    let pageArray = [];
    for (var i = 0, len = users.length; i < len; i += 12) {
      pageArray.push(users.slice(i, i + 12));
    }
    this.state = {
      sortStatus: 'ascending',
      users: users,
      displayUsers: pageArray[0],
      usersFilter: /.+/,
      page: 1,
      pageArray: pageArray
    };
  }

  handleSearch = e => {
    this.setState({
      [e.target.] = e.target.value
    })
  }

  handlePage = e => {
    let pageArray = [];
    for (var i = 0, len = this.state.users.length; i < len; i += 12) {
      pageArray.push(this.state.users.slice(i, i + 12));
    }
    this.setState({
      displayUsers: this.state.pageArray[e.target.value],
      pageArray: pageArray
    });
  };

  // Called within sortButton!!
  handleClick = () => {
    if (this.state.sortStatus === 'ascending') {
      let NewUsers = this.sortAlph(this.state.users);
      this.setState({
        sortStatus: 'descending',
        users: NewUsers
      });
    }
    if (this.state.sortStatus === 'descending') {
      let NewUsers = this.sortAlph(this.state.users);
      this.setState({
        sortStatus: 'ascending',
        users: NewUsers
      });
    }
  };

  sortAlph = users => {
    console.log(this);
    return users
      .sort((a, b) => {
        var nameA = a.login.toUpperCase(); // ignore upper and lowercase
        var nameB = b.login.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          if (this.state.sortStatus === 'ascending') return -1;
          return 1;
        }
        if (nameA > nameB) {
          if (this.state.sortStatus === 'descending') return -1;
          return 1;
        }

        // names must be equal
        return 0;
      })
      .slice(0);
  };

  render() {
    return (
      <div className="App">
        <SortButton
          handleClick={this.handleClick}
          sortDirection={this.state.sortStatus}
        />
        <Search />
        <PageCounter
          pageNum={this.state.pageArray.length}
          handlePage={this.handlePage}
        />
        <Gallery users={this.state.displayUsers} />
      </div>
    );
  }
}

export default App;
