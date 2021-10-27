import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

import WebcamComponent from './components/webcam'

const ResultScreen = () => {

    const history = useHistory();

    const [authToken, setAuthToken] = useContext(AuthContext);
    const [sliderValue, setSliderValue, replicaValue, setReplicaMovement] = useContext(UserContext);


    function endSessionHandler() {
        // redirect to login after logout...
        setAuthToken("");
        history.push("/");
    }
   
    return (
        <div className="results">
            <div className="resultsContainer">
                <div className="pacientBox">
                    <div className="cameraBox">
                        <WebcamComponent />
                        <button onClick={endSessionHandler}>End Session</button>
                    </div>
                    <div className="resultsBox">
                        <p className="resultData">Distance from beginning of the slider and the circle: {sliderValue} px</p>
                        <p className="resultData">Distance from beginning of the smaller container and the circle: {replicaValue} px</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultScreen;