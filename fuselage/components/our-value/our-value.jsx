import React from 'react';
import CSS from "../../../pages/index.module.css";

const OurValue = () => {
    return (
        <section id='videoContainer1' className="block bg-wash" style={{paddingBottom: '4rem'}}>
            <div className="container">
                <video
                    id='video1'
                    className={CSS.video}
                    playsInline={true}
                    autoPlay={true}
                    loop={true}
                    preload="auto"
                    muted={true}
                    style={{ width: `100%`}}
                >
                    <source src="/assets/projects/chateau-de-sours/6_our_value_desktop.mp4" type="video/mp4" />
                </video>
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