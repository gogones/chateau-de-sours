import React from 'react';
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";

const HistoryVideo = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    return (
        <section className={currentBreakpoint <= 600 ? '' : 'block'} style={{paddingTop: 0}}>
            <video
                playsInline={true}
                autoPlay={true}
                loop={true}
                preload="auto"
                muted={true}
                style={{ width: `100%`}}
            >
                <source src="/assets/projects/chateau-de-sours/Chateau_20210114_Website_4.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default HistoryVideo;