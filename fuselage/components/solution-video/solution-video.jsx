import React from 'react';
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";

const SolutionVideo = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    return (
        <section className={currentBreakpoint <= 600 ? '' : `block`} style={{paddingBottom: 0}}>
            <video
                playsInline={true}
                autoPlay={true}
                loop={true}
                preload="auto"
                muted={true}
                style={{ width: `100%`}}
            >
                <source src="/assets/projects/chateau-de-sours/Chateau_20201218_Website_1.2.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default SolutionVideo;