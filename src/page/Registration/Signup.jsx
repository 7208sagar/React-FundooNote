import React, { Component } from 'react'
//import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
// import { TextField } from '@mui/material'
// import logo from '../../assets/logo.jpg'
import './Signup.css'
import Button from '@mui/material/Button';

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
        type:"password"
    };
}

showPassword = (event) => {
    event.target.checked ? 
    this.setState({
        type:"text"
    }) : this.setState({
        type:"password" 
    })
}
  render() {
    return (
      <div>
        <div className='content'>
         <div className='content-part'> 
           <div className='left-side'>
             <div className='heading'>
               <h2>
               <font color="#4285F4"  > F </font> <font color="#DB4437"  > U </font><font color="#F4B400"  > N </font><font color="#4285F4"  > D </font><font color="#0F9D58"  > O </font><font color="#DB4437"  > O </font>
               </h2>
             </div>

              <div className='title'>
              <span>Create your Fundoo Account</span>
              </div>
              
              <div className='first-r'>
              <div className='left-r'><TextField id="outlined-basic" label="First name" size='small' fullWidth variant="outlined" /></div>
              <div className='left-r'><TextField id="outlined-basic" label="Last name" size='small' fullWidth variant="outlined" /></div>
              </div>

              <div className='second-r'>
              <div className='username'><TextField id="outlined-basic" label="Username" helperText="You can use letter, numbers & periods" fullWidth size='small' variant="outlined" /></div>
              </div>

              <div className='email'>
              <p>Use my current email address instead</p>
              </div>

              <div className='third-r'>
              <div className='left-r' > <TextField id="outlined-basic" label="Password" variant="outlined" size='small' className='pass' /></div>
              <div className='left-r' > <TextField id="outlined-basic" label="confirm" variant="outlined" size='small' className='pass' /></div>             
              </div>

              <div className='helper-Text'>
              <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
              </div>

              <div className='checkbox'>
              <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />             
              </div>

              <div className='next-button'>
              <div className='button-container'>
                    <button>Next</button>
                    <p>Sign in instead</p>
              </div>
             </div>
           </div>
           
           <div className='right-side'>
             <div className='logo'>
             <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" class="j9NuTc TrZEUc" />
             <p> One account. All of Fundoo<br /> working for you. </p>
             </div>
           </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Signup
