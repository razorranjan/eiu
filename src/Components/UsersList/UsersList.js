import React, { Component } from 'react';
import './UsersList.css';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex : null,
      selectedUser : null
     }
  }
  // componentDidMount(){
  //   this.setState({ 
  //     data : this.props.users
  //   });
  // }
  handleListItemClick = (event, index, value) => {
    // let selectedUser = value;
    this.setState({
      selectedIndex: index,
      // selectedUser: value
    });
    // console.log(this.state.selectedUser);
  };
  render() { 
    console.log(this.props.action);
    return ( 
      <div className="UsersList">
        <List component="nav" aria-label="contacts">
          {this.props.users.map((value,index) => {
            return (
            <ListItem 
            button 
            key={value.employeeId}
            selected={this.state.selectedIndex === index}
            onClick={(event) => this.handleListItemClick(event, index, value)}>
              <ListItemText primary={value.name} />
            </ListItem>
            );
          })}
        </List>
      </div>
     );
  }
}

export default UsersList;
