import React from "react";
import Nav from './static/nav';
import { useState } from "react";
import ReactSlider from "react-slider";


const SliderScreen = () => {
    
    const tokenKey = "389420394732472";
    const [sliderValue, setSliderValue] = useState("");

    const handleSlideChange = (newValue) => {
        setSliderValue(newValue);
        console.log(newValue);
    }

    

    return (
        <div>
            <Nav tokenKey={tokenKey}/>
            <form>

                <div className="sliderContainer" >
                    <p>You can change the position of the dot to the left or to the right. Drag the icon to change.</p>
                    <div className="sliderBox" >
                        
                        <ReactSlider
                            max = "2343"

                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            renderThumb={
                                (props, state) => <div 
                                {...props}>
                                    {handleSlideChange(state.valueNow)}
                                </div>
                                }
                        />
                    </div>
                </div>
                <div className="pacientBox">
                    <div className="cameraBox">
                                <p>cameraBox</p>

                    </div>
                    <div className="sliderReplicatorBox">
                        <p>sliderReplicator</p>
                        
                    </div>

                </div>
            </form>
            
        </div>
    )

}

export default SliderScreen;