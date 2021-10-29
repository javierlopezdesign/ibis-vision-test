import React, { useState, useRef, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from "./contexts/UserContext";
import { WebCamContext } from "./contexts/WebCamContext";

import ReactSlider from "react-slider";
import WebcamComponent from './components/webcam'



function SliderPage() {

    // declaration of the history to get access to redirects
    const history = useHistory();

    // Declaration of the slider and replica containers.
    const [sliderWidth, setSliderWidth] = useState(0);
    const [replicaWidth, setReplicaWidth] = useState(0);

    // adding values to useContext in order to get them globally
    const [sliderValue, setSliderValue, replicaValue, setReplicaMovement] = useContext(UserContext);
    const [webcamState, setWebcamState] = useContext(WebCamContext);

    // declaration of References to point the slider and replica divs.
    const sliderRef = useRef();
    const replicaBoxRef = useRef();

    //   Gather any changes in the browser to catch slider and replica boxes width.
    useEffect( () => {
        
        // 25px because the value is obtained from the center of the DIV, and the width is 50px, so removing 
        // 25 px from the width retrieved will give the distance.
        setSliderWidth((sliderRef.current.getBoundingClientRect().width)-25,[]);
        // 50px to remove the ball width
        setReplicaWidth((replicaBoxRef.current.getBoundingClientRect().width)-50,[]);

    },[] )

    // function to get the slider values on any change of it.
    const sliderChangeHandler = (value) => {
        let widthConversion = replicaWidth / sliderWidth;
        setSliderValue(value,[]);
        let replicaValue = sliderValue * widthConversion;
        replicaValue = replicaValue.toFixed(0)
        setReplicaMovement(replicaValue,[]);
    }

    // function to control the submit button.
    // I've created a form 
    function formHandler(e){
        e.preventDefault();
        history.push("/results")
    }

    return (
       <>
            <form onSubmit={formHandler}>
                <div className="sliderContainer" >
                    <p>You can change the position of the dot to the left or to the right. Drag the icon to change.</p>
                    <div className="sliderBox" ref={sliderRef}>
                        <ReactSlider
                            max = {sliderWidth}
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            onChange={ (value) => sliderChangeHandler(value)}
                            />
                    </div>
                </div>
                <div className="pacientBox">
                    <div className="cameraBox">
                        {webcamState === true && <WebcamComponent />}
                    </div>
                    <div className="sliderReplicatorBox" ref={replicaBoxRef}>
                        <div className="replicaBall" style={{marginLeft: replicaValue + 'px'}}></div>
                    </div>
                </div>
                <button type="submit">Next</button>
            </form>

       </>
    )

}
export default SliderPage;

