import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import users from './users.js' 
console.log(users);

const UsersRow = ({users}) => {
  return (
    <div className="userRow">
      {users.map(user => {
        return <User user={user} />
      })};
    </div>
  )
}

const Users = ({users, usersPerRow}) => {

  let rows = [];
  for (var i = 0, len = users.length; i < len; i+=usersPerRow) {
    rows.push(users.slice(i, i +usersPerRow+1));
  }
  console.log(rows);

  return (

    <div className="">
    { 
      rows.map(usersArr => {
        return (
          <UsersRow users={usersArr} usersPerRow={usersPerRow}/> 
        )
      })
    }
    </div>
  );
}
const User = ({user}) => {
  return (
       <div className="userBox">
         <a href={user.html_url}>{user.login}</a>
         <img src={user.avatar_url}  />
       </div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Users users={users} usersPerRow={4}/>
      </div>
    );
  }
}

export default App;
