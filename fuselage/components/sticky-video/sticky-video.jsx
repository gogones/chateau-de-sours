import React from 'react';
import CSS from "../../../pages/index.module.css";
import {gsap} from "gsap/dist/gsap";
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";

const StickyVideo = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    React.useEffect(() => {
        const scrollTrigger = {
            trigger: '.-a-stickyVideoContainer',
            scrub: 1,
            start: 'top-=73 middle',
            pin: true,
            toggleActions: 'restart none reverse none',
            onLeave: () => videoRef.current.play()
        };

        if(value && currentBreakpoint > breakpoints.sm) {
            gsap.to('.-a-stickyVideo', {
                scrollTrigger,
                padding: '4rem',
            })
        } else if(value && currentBreakpoint <= breakpoints.sm) {
            gsap.to('.-a-stickyVideo', {
                scrollTrigger,
                padding: '2rem',
            })
        }
    }, [currentBreakpoint, value]);

    const videoRef = React.useRef();

    return (
        <section className={`${CSS.stickyVideoContainer} -a-stickyVideoContainer`}>
            <video
                ref={videoRef}
                className={`${CSS.stickyVideo} -a-stickyVideo`}
                playsInline={true}
                loop={true}
                preload="auto"
                muted={true}
                poster="/assets/projects/chateau-de-sours/5_homepage_desktop.jpg"
            >
                <source src="/assets/projects/chateau-de-sours/5_homepage_desktop.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default StickyVideo;