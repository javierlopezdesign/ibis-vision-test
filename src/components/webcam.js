import React from "react";
import {useRef, useEffect } from "react";

function WebcamComponent() {

    const videoRef = useRef(null);

    

    const getVideo = () => {
        window.navigator.mediaDevices.getUserMedia({
            video: 1920,
            height: 1080
        })
        .then( stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch( err =>
            console.log(err)
        )
    }

    useEffect(() => {
        getVideo();

    }, [videoRef])

    return(
        <div className="camera">
            <video ref={videoRef} className="webcam"></video>
            {/* <video className="webcam"></video> */}

        </div>
    )

}

export default WebcamComponent;