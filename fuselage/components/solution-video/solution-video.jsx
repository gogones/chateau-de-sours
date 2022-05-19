import React from 'react';
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";
import CSS from "../../../pages/index.module.css";
import {AdvancedVideo} from "@cloudinary/react";
import {solutionVideo} from "../../../src/cloudinary/videos";
import {gsap} from "gsap/dist/gsap";

const SolutionVideo = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    const videoRef = React.useRef();

    React.useEffect(() => {
        const scrollTrigger = {
            trigger: '#solutionVideoContainer',
            scrub: 1,
            onEnter: () => videoRef.current.play()
        };
        gsap.to('#solutionVideoContainer', {
            scrollTrigger,
        })
    }, []);

    return (
        <section id='solutionVideoContainer' className={currentBreakpoint <= 600 ? `block ${CSS.removePh}` : `block`}>
            <AdvancedVideo
                innerRef={videoRef}
                playsInline
                loop
                muted
                preload="none"
                style={{ width: `100%`}}
                cldVid={solutionVideo} />
        </section>
    );
};

export default SolutionVideo;