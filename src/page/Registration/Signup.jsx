import React, { Component } from 'react'
//import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
// import logo from '../../assets/logo.jpg'
 import './Signup.css'
// import './Signup.scss'
// import Button from '@mui/material/Button';

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: '',
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        confirmError: false,
        type: "password"
    };
}

changeState = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

validation = () => {
    let isError = false;
    const error = this.state;
    error.firstNameError = this.state.firstName === '' ? true : false;
    error.lastNameError = this.state.lastName === '' ? true : false;
    error.emailError = this.state.email === '' ? true : false;
    error.passwordError = this.state.password === '' ? true : false;
    error.confirmError = this.state.confirm === '' ? true : false;

    this.setState({
        ...error
    })

    isError = error.firstNameError || error.lastNameError || error.emailError || error.passwordError || error.confirmError
    return isError;
}

next = () => {
    let isValidated = this.validation();
    if(!isValidated){
        console.log("Navigate");
    }
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
              <div className='left-r'><TextField id="outlined-basic" name='first name' label="First name" error={this.state.firstNameError}
                            helperText={this.state.firstNameError ? "First Name is required" : ''}
                            onChange={(event) => this.changeState(event)} size='small' fullWidth variant="outlined" /></div>
              <div className='left-r'><TextField id="outlined-basic" label="Last name" name='last name' size='small' fullWidth variant="outlined" error={this.state.lastNameError}
                            helperText={this.state.lastNameError ? "Last Name is required" : ''}
                            onChange={(event) => this.changeState(event)} /></div>
              </div>

              <div className='second-r'>
              <div className='username'><TextField id="outlined-basic" label="Username" name='email' helperText="You can use letter, numbers & periods" fullWidth size='small' variant="outlined" error={this.state.emailError}
                            helperText={this.state.emailError ? "Email is required" : ''}
                            onChange={(event) => this.changeState(event)} /></div>
              </div>

              <div className='email'>
              <p>Use my current email address instead</p>
              </div>

              <div className='third-r'>
              <div className='left-r' > <TextField type={this.state.type} id="outlined-basic" label="Password" name='password' variant="outlined" size='small' fullWidth error={this.state.passwordError}
                            helperText={this.state.passwordError ? "Password is required" : ''}
                            onChange={(event) => this.changeState(event)} /></div>
              <div className='left-r' > <TextField type={this.state.type} id="outlined-basic" label="confirm" name='confirm' variant="outlined" size='small' fullWidth error={this.state.confirmError}
                            helperText={this.state.confirmError ? "Confirm password is required" : ''}
                            onChange={(event) => this.changeState(event)} /></div>             
              </div>

              <div className='helper-Text'>
              <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
              </div>

              <div className='checkbox'>
              <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />             
              </div>

              <div className='next-button'>
              <div className='button-container'>
                    <button onClick={this.next} >Next</button>
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
