import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import users from './users.js';

class UsersOrder extends Component {
  constructor() {
    super();
    this.state = {
      sortStatus: 'ascending'
    };
  }

  handleClick = () => {
    if (this.state.sortStatus === 'ascending') {
      this.setState({
        sortStatus: 'descending'
      });
    }
    if (this.state.sortStatus === 'descending') {
      this.setState({
        sortStatus: 'ascending'
      });
    }
  };

  sort = users => {
    return users.sort(function(a, b) {
      var nameA = a.login.toUpperCase(); // ignore upper and lowercase
      var nameB = b.login.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        if (this.state.sortStatus === 'ascending') return -1;
        return 1;
      }
      if (nameA > nameB) {
        if (this.state.sortStatus === 'descending') return 1;
        return -1;
      }

      // names must be equal
      return 0;
    });
  };

  render() {
    return <input type="submit" />;
  }
}

export default Filter;
