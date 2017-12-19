import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import users from './users.js';

class UsersOrder extends Component {
  constructor() {
    super();
    this.state = {
      sortStatus: 'ascending',
      users: users
    };
  }

  handleClick = () => {
    if (this.state.sortStatus === 'ascending') {
      const newUsers = this.sortAlph(users);
      this.setState({
        sortStatus: 'descending',
        users: 
      });
    }
    if (this.state.sortStatus === 'descending') {
      this.setState({
        sortStatus: 'ascending',
        users: this.sortAlph(users)
      });
    }
    
  };

  sortAlph = users => {
    return users.sort(function(a, b) {
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
    }).slice(0);
  };

  render() {
    return <input type="submit" value={this.state.sortStatus} onClick={this.handleClick} />;
  }
}

export default UsersOrder;
