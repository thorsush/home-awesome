import React from 'react';
import TextField from "@material-ui/core/TextField";


export default function SignIn() {
    return (
        <div className='sign_in'>
            <div className='sign_in_box'>
              <h1>Sign In for better Experience</h1>
              <TextField className="user_input" id="standard-basic" label="Username" variant="standard"  />
              <TextField className="user_input" id="standard-basic" label="Passward" variant="standard"  />
              <button className="sign_in_button" title="Click for Signing In" onClick={console.log('rada rada')}>Sign In</button>
            </div>
        </div>
    )
}
