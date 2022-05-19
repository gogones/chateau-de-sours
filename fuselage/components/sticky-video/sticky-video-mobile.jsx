import React from 'react';
import CSS from "../../../pages/index.module.css";
import {AdvancedVideo} from "@cloudinary/react";
import {stickyVideo} from "../../../src/cloudinary/videos";

const StickyVideoMobile = () => {

    return (
        <section className={`${CSS.stickyVideoContainer} -a-stickyVideoContainer`}>
            <AdvancedVideo
                cldVid={stickyVideo}
                className={`${CSS.stickyVideo} -a-stickyVideo`}
                playsInline
                loop
                muted
                autoPlay
                poster="/assets/projects/chateau-de-sours/5_homepage_desktop.jpg"
            />
        </section>
    );
};

export default StickyVideoMobile;