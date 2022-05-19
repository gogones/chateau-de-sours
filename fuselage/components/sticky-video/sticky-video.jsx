import React from 'react';
import CSS from "../../../pages/index.module.css";
import {gsap} from "gsap/dist/gsap";
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";
import {AdvancedVideo} from '@cloudinary/react';
import {stickyVideo} from "../../../src/cloudinary/videos";

const StickyVideo = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    const videoRef = React.useRef();
    React.useEffect(() => {

        if(value && currentBreakpoint > breakpoints.sm) {
            const scrollTrigger = {
                trigger: '.-a-stickyVideoContainer',
                scrub: 1,
                start: 'top-=73 middle',
                pin: true,
                toggleActions: 'restart none reverse none',
                onLeave: () => videoRef.current.play()
            };
            gsap.to('.-a-stickyVideo', {
                scrollTrigger,
                padding: '4rem',
            })
        }
    }, [currentBreakpoint, value]);

    return (
        <section className={`${CSS.stickyVideoContainer} -a-stickyVideoContainer`}>
            <AdvancedVideo
                cldVid={stickyVideo}
                innerRef={videoRef}
                className={`${CSS.stickyVideo} -a-stickyVideo`}
                playsInline
                loop
                preload="none"
                muted
                poster="/assets/projects/chateau-de-sours/5_homepage_desktop.jpg"
             />
        </section>
    );
};

export default StickyVideo;