import React, { useState } from "react";
import logoLogin from './static/images/logo-login.jpg'
import { Icon } from '@iconify/react';



function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setauthToken] = useState("");

  async function loginUser(credentials) {
    return await fetch('https://api.ibisvision.co.uk/api-token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(
      result => result.json()      
    )
    .then(
      json => setauthToken(json.token)
    )
  }


  function handleSubmit(event) {
    event.preventDefault();
    loginUser({
      "username": email,
      "password": password
    });
    // console.log(tokenRequest);
    
  }

  return (
    <div className="loginpage">
      <div className="loginSection">    
        <img className="logo" src={logoLogin} alt="Logo IbisVision" />
        <form onSubmit={handleSubmit}>
            
            <p>
              {authToken}
            </p>

            <div className="userInput">
              <Icon className="userInputIcon" icon="ant-design:user-outlined" />
              <input
                className="loginInput"
                type="text"
                value={email}
                placeholder="username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="pwdInput">
              <Icon className="pwdInputIcon" icon="ri:lock-password-line" />
              <input
                className="loginInput "
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />


            </div>
          <button type="submit">
            Login
          </button>
        </form>
      </div>  
    </div>
  );
}

export default Login;
