import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../forget/ForgetP.css'
export class ForgetP extends Component {
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
                <p className="sign-in">Find your email</p>
                <p className="account">Enter your recovery email</p>
            </div>
            <div className="email">
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth autoFocus />
            </div>       
            </div>
            <div className="create">
                <div className="box">
                <Button style={{ backgroundColor: '#1a73e8',color: 'white' }} variant="next">Next</Button>
                </div>
            </div>
        </div>
    )
  }
}

export default ForgetP
