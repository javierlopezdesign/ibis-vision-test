import React, { useState, useRef, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from "./contexts/UserContext";
import { WebCamContext } from "./contexts/WebCamContext";

import ReactSlider from "react-slider";
import WebcamComponent from './components/webcam'



function SliderPage() {

    const history = useHistory();

    const [sliderWidth, setSliderWidth] = useState(0);
    const [replicaWidth, setReplicaWidth] = useState(0);
    // const [sliderValue, setSliderValue] = useState(0);
    // const [replicaMovement, setReplicaMovement] = useState(0);

    const [sliderValue, setSliderValue, replicaValue, setReplicaMovement] = useContext(UserContext);
    const [webcamState, setWebcamState] = useContext(WebCamContext);

    const sliderRef = useRef();
    const replicaBoxRef = useRef();

    //   Gather any changes in the browser to catch slider and replica boxes width.
    useEffect( () => {
        
        setSliderWidth(sliderRef.current.getBoundingClientRect().width,[]);
        // 50px to remove the ball width
        setReplicaWidth((replicaBoxRef.current.getBoundingClientRect().width)-50,[]);

    },[] )

    const sliderChangeHandler = (value) => {
        let widthConversion = replicaWidth / sliderWidth;
        setSliderValue(value,[]);
        let replicaValue = sliderValue * widthConversion;
        replicaValue = replicaValue.toFixed(0)
        setReplicaMovement(replicaValue,[]);
    }

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

