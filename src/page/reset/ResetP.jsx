import React, { Component } from 'react'
//import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import '../reset/ResetP.css'

export class ResetP extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          type: "password"
        };
      }
    
      showPassword = (event) => {
        event.target.checked ?
          this.setState({
            type: "text"
          }) : this.setState({
            type: "password"
          })
      }
    
  render() {
    return (
        <div className="login-page">
        <div className="login-container">
            <div className="first-content">
                <div className="Google">
                    <p style={{ color: 'blue' }} >F</p>
                    <p style={{ color: 'red' }}>U</p>
                    <p style={{ color: 'yellow' }}>N</p>
                    <p style={{ color: 'blue' }}>D</p>
                    <p style={{ color: 'green' }}>O</p>
                    <p style={{ color: 'red' }}>O</p>
                </div>
                <p className="sign-in">Reset Password</p>
                <p className="account">Enter your Password</p>
            </div>
            <div className="email">
                <TextField id="outlined-basic" label="New Password" variant="outlined" fullWidth autoFocus />
            </div>
            <div className='row-pass'>
              <div className='l-row-in'>
                  <TextField id="outlined-basic" label="Confirm PassWord" size='medium' fullWidth variant="outlined" /></div>
            </div>

            <div className='checkbox'>
              <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />             
              </div>
           
            <div className="next-b">
                <div className="n-box">
                <Button style={{ backgroundColor: '#1a73e8',color: 'white' }} variant="next">Next</Button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default ResetP
