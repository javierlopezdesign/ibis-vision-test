import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "./contexts/AuthContext";
// import { UserContext } from "./contexts/UserContext";
import { WebCamContext } from "./contexts/WebCamContext";


import { Icon } from '@iconify/react';
import logoLogin from './static/images/logo-login.jpg'

function Login() {
  
  // To get redirections once logged in and out.
  const history = useHistory();
  
  // useContext 
  const [authToken, setAuthToken] = useContext(AuthContext);
  const [webcamState, setWebcamState] = useContext(WebCamContext);

  // local variables 
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  async function loginUser(credentials) {
    return fetch('https://api.ibisvision.co.uk/api-token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then( (event) => {
      if (event.ok) {
        return event.json(); 
      }
    })
  }
  // login success handler, remove the error if it was before, store the token and set the webcam state to true.
  function loginSuccessHandler(token){
    setIsError(false);
    setAuthToken(token);
    setWebcamState(true);
    history.push("/slider");
  }
  
  // if login is an error, 
  function loginErrorHandler(){
    setIsError(true);
    setAuthToken("");
    console.log("Login error")
  }

  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const token = await loginUser({
        "username": user,
        "password": password
      });
      // console.log(token);
      (token) ? loginSuccessHandler(token.token) : loginErrorHandler();

  }

return (
    <div className="loginpage">
      <div className="loginSection">    
        <img className="logo" src={logoLogin} alt="Logo IbisVision" />
        <form onSubmit={handleSubmit}>
            
            <div>
              {/* if the isError state is true change the className to display the error */}
              <p className={ (isError === true) ? "errorMessage" : "loginMessage"}>
                Error: user or password not found. Try again...
              </p>
            </div>

            <div className="userInput">
              <Icon className="userInputIcon" icon="ant-design:user-outlined" />
              <input
                className="loginInput"
                type="text"
                value={user}
                placeholder="username"
                autoComplete="username"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

            <div className="pwdInput">
              <Icon className="pwdInputIcon" icon="ri:lock-password-line" />
              <input
                className="loginInput "
                type="password"
                value={password}
                placeholder="password"
                autoComplete="current-password"
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
