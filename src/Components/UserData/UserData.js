import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './UserData.css'
class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userdata: [],
            domains : ['Software Development','Site Reliability Engineering']
        }
        // this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return ( 
            <div className="UserData">
                <form autoComplete="off" method="POST" action="">
                    <div className="form-control">
                        <TextField 
                            id="name" 
                            label="Name" 
                            value={(this.props.selectedUser) ? this.props.selectedUser.name : ''} 
                            // InputProps={{
                            //     readOnly: true,
                            // }} 
                            variant="outlined"
                            // onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-control">
                        <TextField 
                            id="emailid"
                            label="Email ID"
                            value={(this.props.selectedUser) ? this.props.selectedUser.emailId : ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </div>
                    <div className="form-control">
                        <TextField 
                            id="employeeId"
                            label="Employee ID"
                            value={(this.props.selectedUser) ? this.props.selectedUser.employeeId : ''}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </div>
                    <div className="form-control">
                        {/* <Select
                        // labelId="domain"
                        label="Domain"
                        id="domain"
                        // value="Select Domain"
                        defaultValue={(this.props.selectedUser) ? this.props.selectedUser.domain : ''} 
                        >
                            <MenuItem value="Software Development">Software Development</MenuItem>
                            <MenuItem value="Site Reliability Engineering">Site Reliability Engineering</MenuItem>
                        </Select> */}
                        <TextField
                        id="standard-select-currency-native"
                        select
                        label="Select Domain"
                        value={(this.props.selectedUser) ? this.props.selectedUser.domain : ''}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your Domain"
                        >
                            <option value="" key="select domain"></option>
                            {this.state.domains.map((option) => (
                                <option key={option} value={option}>
                                {option}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div className="form-control">
                        <TextField
                        id="role"
                        label="Role"
                        value={(this.props.selectedUser) ? this.props.selectedUser.role : ''}
                        variant="outlined"
                    />
                    </div>
                    <div className="form-control">
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default UserData;