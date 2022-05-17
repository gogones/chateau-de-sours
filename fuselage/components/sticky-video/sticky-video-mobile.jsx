import React from 'react';
import CSS from "../../../pages/index.module.css";

const StickyVideoMobile = () => {

    return (
        <section className={`${CSS.stickyVideoContainer} -a-stickyVideoContainer`}>
            <video
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

export default StickyVideoMobile;