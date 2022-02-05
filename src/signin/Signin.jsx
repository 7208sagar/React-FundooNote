import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signin/Signin.css'

export class Signin extends Component {

    
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
                <p className="sign-in">Sign in</p>
                <p className="account">Use your Google Account</p>
            </div>
            <div className="email">
                <TextField id="outlined-basic" label="Email or phone" variant="outlined" fullWidth autoFocus />
            </div>
            <div className='row-pass'>
              <div className='l-row-in'>
                  <TextField id="outlined-basic" label="Password" size='medium' fullWidth variant="outlined" /></div>
            </div>

            <br></br>
            <div className="forgot">Forget email?</div>
            <div className="text-content">
                <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                {/* <p className="learnmore">Learn more</p> */}
            </div>
            <div className="s-create">
                <p className="s-text" >Create account</p>
                <div className="s-box">
                <Button style={{ backgroundColor: '#1a73e8',color: 'white' }} variant="next">Next</Button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Signin
