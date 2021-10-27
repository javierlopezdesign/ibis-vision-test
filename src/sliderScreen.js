import React, { useState, useRef, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UserContext } from "./UserContext";

import ReactSlider from "react-slider";
// import WebcamComponent from './components/webcam'


const SliderScreen = () => {

    // const history = useHistory();
    // // console.log(history)

    // // const [sliderValue, setSliderValue, replicaMovement, setReplicaMovement] = useContext(UserContext)

    // // Gather any changes in the browser to catch slider and replica boxes width.
    // // useEffect( () => {
        
    // //     setSliderWidth(sliderRef.current.getBoundingClientRect().width,[]);
    // //     // 50px to remove the ball width
    // //     setReplicaWidth((replicaBoxRef.current.getBoundingClientRect().width)-50,[]);

    // // },[] )

    // // Slider current value
    // const [sliderValue, setSliderValue] = useState("");
    
    // // Slider & replica width estates. 
    // const [sliderWidth, setSliderWidth] = useState(0);
    // const [replicaWidth, setReplicaWidth] = useState(0);
    
    // // replica movement estate
    // const [replicaMovement, setReplicaMovement] = useState("");
    
    // // refs to slider div and replica div
    // const sliderRef = useRef();
    // const replicaBoxRef = useRef();

    // // handler to catch onChange values in the ReactSlider component
    // // set slider value estate and the replicamovement depending on the value of the slider.
    // const sliderChangeHandler = (value) => {
    //     let widthConversion = replicaWidth / sliderWidth;
    //     setSliderValue(value,[]);
    //     setReplicaMovement( () => (sliderValue * widthConversion),[]);
    // }

    // function formHandler(e){
    //     e.preventDefault();
    //     history.push("/results")
    // }

    return (
        <div className="screen1">
            <h1>slider</h1>
            <h1>slider</h1>
            <h1>slider</h1>
            <h1>slider</h1>

            {/* <form onSubmit={formHandler}>
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
                        {/* <WebcamComponent /> */}
                    {/* </div>
                    <div className="sliderReplicatorBox" ref={replicaBoxRef}>
                        <div className="replicaBall" style={{marginLeft: replicaMovement + 'px'}}></div>
                    </div>
                </div>
                <button type="submit">Next</button>
            </form> */}
        </div>
    )

}

export default SliderScreen;