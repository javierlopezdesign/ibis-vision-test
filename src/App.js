import React, { useState,useMemo } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { UserContext } from "./UserContext";
import { AuthContext } from "./AuthContext";


// Pages
import LoginPage from './loginPage';
import SliderPage from './sliderPage';
import ResultScreen from './resultScreen';
import Nav from './static/nav'

// Styles
import './static/sass/style.sass';


function App() {

  // set authToken if login succesful
  const [authToken, setAuthToken] = useState("");
  // const [authToken, setAuthToken] = useContext(AuthContext)
  

  const [sliderValue, setSliderValue] = useState(0);
  const [replicaValue, setReplicaMovement] = useState(0);

  // the last [] trigger just useMemo when the values changes!!!!
  const providerValue = useMemo(()=>[
    sliderValue, setSliderValue, replicaValue, setReplicaMovement], [
    sliderValue, setSliderValue, replicaValue, setReplicaMovement])

  const providerAuth = useMemo(()=>[
      authToken, setAuthToken], [
      authToken, setAuthToken])


    
  return (
    <>
    <Router>
      <Switch>
          <AuthContext.Provider value={providerAuth}>
            
            <Nav />

            <UserContext.Provider value={providerValue}>
              <Route path="/" exact component={LoginPage} />

              <Route path="/slider" component={SliderPage}/>  

              <Route path="/results" component={ResultScreen}/>       

              <Redirect from="*" to="/" />

            </UserContext.Provider>
          </AuthContext.Provider>
      </Switch>
    </Router>

    {/* <LoginPage />
    <SliderScreen />
    <ResultScreen/> */}
    </>
  );
}

export default App;
