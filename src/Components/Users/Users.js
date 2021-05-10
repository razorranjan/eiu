import React, { Component } from 'react';
import './Users.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import UserData from '../UserData/UserData';
class Users extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = { 
      users: [],
      selectedUser: [],
     }
  }
  handler(param1) {
    console.log(param1);
    this.setState({
      selectedUser: param1
    });
  }
  componentDidMount() {
    fetch('http://www.mocky.io/v2/5e55294d31000029b7eb36fb')
    .then(response => response.json())
    .then(result => {
      this.setState({ 
        users: result.sort((a, b) => (a.employeeId > b.employeeId) ? 1 : -1)
      });
    });
  }
  handleListItemClick = (event, index, value) => {
    this.setState({
      selectedIndex: index,
      selectedUser: value
    });
  };
  render() { 
    return ( 
      <div className="Users">
        <div className="UsersList">
          <List component="nav" aria-label="contacts" className="main-nav-container">
            {this.state.users.map((value,index) => {
              return (
              <ListItem 
              className="main-nav-listitem"
              button 
              key={value.employeeId}
              selected={this.state.selectedIndex === index}
              onClick={(event) => this.handleListItemClick(event, index, value)}
              >
                <ListItemText primary={value.name}/>
              </ListItem>
              );
            })}
          </List>
        </div>
        <UserData selectedUser={this.state.selectedUser}></UserData>
      </div>
     );
  }
}

export default Users;
