import React from 'react';
import CSS from "../../../pages/index.module.css";
import {gsap} from "gsap/dist/gsap";

const StickyVideo = () => {
    React.useEffect(() => {
        if(document.querySelector("body").clientWidth > '900'){
            gsap.to('.-a-stickyVideo', {
                scrollTrigger: {
                    trigger: '.-a-stickyVideoContainer',
                    scrub: 1,
                    start: 'top-=73 middle',
                    pin: true,
                    markers: true,
                    toggleActions: 'restart none reverse none',
                    onLeave: () => videoRef.current.play()
                },
                padding: '4rem',
            })
        }
    }, []);

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