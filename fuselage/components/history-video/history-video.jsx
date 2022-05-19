import React from 'react';
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";
import {AdvancedVideo} from "@cloudinary/react";
import {historyVideo} from "../../../src/cloudinary/videos";
import {gsap} from "gsap/dist/gsap";

const HistoryVideo = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    const videoRef = React.useRef();
    React.useEffect(() => {
        const scrollTrigger = {
            trigger: '#historyVideoContainer',
            scrub: 1,
            onEnter: () => videoRef.current.play()
        };
        gsap.to('#historyVideoContainer', {
            scrollTrigger,
        })
    }, []);

    return (
        <section id="historyVideoContainer" className={currentBreakpoint <= 600 ? '' : 'block'} style={{paddingTop: 0}}>
            <AdvancedVideo
                innerRef={videoRef}
                playsInline
                loop
                muted
                preload="none"
                style={{ width: `100%`}}
                cldVid={historyVideo}
            />
        </section>
    );
};

export default HistoryVideo;