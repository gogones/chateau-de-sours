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
                },
                padding: '4rem'
            })
        }
    }, []);

    return (
        <section className={`${CSS.stickyVideoContainer} -a-stickyVideoContainer`}>
            <video
                className={`${CSS.stickyVideo} -a-stickyVideo`}
                playsInline={true}
                autoPlay={true}
                loop={true}
                preload="auto"
                muted={true}
            >
                <source src="/assets/projects/chateau-de-sours/5_homepage_desktop.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default StickyVideo;