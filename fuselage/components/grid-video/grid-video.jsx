import React from 'react';
import CSS from "../../../pages/index.module.css";
import {AdvancedVideo} from "@cloudinary/react";
import {gridVideo} from "../../../src/cloudinary/videos";
import {gsap} from "gsap/dist/gsap";

const GridVideo = () => {
    const videoRef = React.useRef();

    React.useEffect(() => {
        const scrollTrigger = {
            trigger: '#videoContainer2',
            scrub: 1,
            onEnter: () => videoRef.current.play()
        };
        gsap.to('#videoContainer2', {
            scrollTrigger,
        })
    }, []);

    return (
        <section id='videoContainer2' className="block bg-default">
            <div className="container">
                <AdvancedVideo
                    id='video2'
                    innerRef={videoRef}
                    className={CSS.video}
                    playsInline
                    loop
                    muted
                    preload="none"
                    style={{ width: `100%`}}
                    cldVid={gridVideo}
                />
            </div>
        </section>
    );
};

export default GridVideo;