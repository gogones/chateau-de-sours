import React from 'react';
import CSS from "../../../pages/index.module.css";
import {AdvancedVideo} from "@cloudinary/react";
import {ourValueVideo} from "../../../src/cloudinary/videos";
import {gsap} from "gsap/dist/gsap";

const OurValue = () => {
    const videoRef = React.useRef();
    React.useEffect(() => {
            const scrollTrigger = {
                trigger: '#videoContainer1',
                scrub: 1,
                onEnter: () => videoRef.current.play()
            };
            gsap.to('#videoContainer1', {
                scrollTrigger,
            })
    }, []);

    return (
        <section id='videoContainer1' className="block bg-wash" style={{paddingBottom: '4rem'}}>
            <div className="container">
                <AdvancedVideo
                    id='video1'
                    innerRef={videoRef}
                    className={CSS.video}
                    playsInline
                    loop
                    muted
                    style={{ width: `100%`}}
                    preload="none"
                    cldVid={ourValueVideo} />
            </div>

            <div className={`${CSS.mobileRemovePaddingBottom} container desktopPaddingLeft py-md | fadeUp`}>
                <p className='fs-3 fw-500 maxw-45'>
                    Base Creative definined the new brand&apos;s website, its visual style and brand voice. Just as the vineyard nurtures natural systems of agriculture, we designed the website to seamlessly flow through information and immerse virtual visitors into the unique Château de Sours experience.
                </p>
            </div>
        </section>
    );
};

export default OurValue;