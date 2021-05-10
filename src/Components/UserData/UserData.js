import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './UserData.css'
class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            emailId: '',
            employeeId: '',
            domain: '',
            role: '',
            domains : ['Software Development','Site Reliability Engineering']
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            name:nextProps.selectedUser.name,
            emailId:nextProps.selectedUser.emailId,
            employeeId:nextProps.selectedUser.employeeId,
            domain:nextProps.selectedUser.domain,
            role:nextProps.selectedUser.role,
        });
    }
    handleRoleChange = (event) => {
        this.setState({
            role:event.target.value
        })
    }
    handleDomainChange = (event) => {
        this.setState({
            domain:event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.name === '' || this.state.emailId === '' || this.state.employeeId === '' || this.state.domain === '' || this.state.role === ''){
            return;
        }
        const postData = {
            name:this.state.name,
            emailId:this.state.emailId,
            employeeId:this.state.employeeId,
            domain:this.state.domain,
            role:this.state.role,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        };
        console.log(requestOptions);
        // fetch('url', requestOptions)
        //     .then(response => response.json())
        //     .then();
    }
    render() {
        return ( 
            <div className="UserData">
                <form autoComplete="off" method="POST" onSubmit={this.handleSubmit}>
                    <div className="form-control">
                        <TextField 
                            id="name"
                            label="Name"
                            name="username"
                            value={this.state.name}
                            variant="outlined"
                            margin="normal"
                            error={this.state.name === ""}
                            helperText={this.state.name === "" ? 'Cannot be empty!' : ''}
                            disabled={true}
                        />
                    </div>
                    <div className="form-control">
                        <TextField 
                            id="emailid"
                            label="Email ID"
                            name="email"
                            value={this.state.emailId}
                            variant="outlined"
                            margin="normal"
                            error={this.state.emailId === ""}
                            helperText={this.state.emailId === "" ? 'Cannot be empty!' : ''}
                            disabled={true}
                        />
                    </div>
                    <div className="form-control">
                        <TextField 
                            id="employeeId"
                            label="Employee ID"
                            name="employeeid"
                            value={this.state.employeeId}
                            variant="outlined"
                            margin="normal"
                            error={this.state.employeeId === ""}
                            helperText={this.state.employeeId === "" ? 'Cannot be empty!' : ''}
                            disabled={true}
                        />
                    </div>
                    <div className="form-control">
                        <TextField
                            id="domain"
                            select
                            label="Select Domain"
                            name="domain"
                            value={this.state.domain}
                            SelectProps={{
                                native: true,
                            }}
                            variant="outlined"
                            margin="normal"
                            error={this.state.domain === ""}
                            helperText={this.state.domain === "" ? 'Cannot be empty!' : ''}
                            onChange={this.handleDomainChange}
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
                        name="role"
                        value={this.state.role}
                        variant="outlined"
                        margin="normal"
                        error={this.state.role === ""}
                        helperText={this.state.role === "" ? 'Cannot be empty!' : ''}
                        onChange={this.handleRoleChange}
                    />
                    </div>
                    <div className="form-control">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            type="submit" 
                            margin="normal"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default UserData;