import React from 'react';
import CSS from "../../../pages/index.module.css";

const GridVideo = () => {
    return (
        <section id='videoContainer2' className="block bg-default">
            <div className="container">
                <video
                    id='video2'
                    className={CSS.video}
                    playsInline={true}
                    autoPlay={true}
                    loop={true}
                    preload="auto"
                    muted={true}
                    style={{ width: `100%`}}
                >
                    <source src="/assets/projects/chateau-de-sours/0_essentials_list.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
};

export default GridVideo;