import React from 'react';
import CSS from "../../../pages/index.module.css";
import {gsap} from "gsap/dist/gsap";
import {AdvancedVideo} from "@cloudinary/react";
import {
    homepageMobileVideo,
    ourValueMobileVideo,
    philosophyMobileVideo
} from "../../../src/cloudinary/videos";

const FloatingPhones = () => {
    const videoRef = React.useRef();
    React.useEffect(() => {
        gsap.to('.floatingPhone2', {
            scrollTrigger: {
                trigger: '.floatingPhones',
                scrub: 1,
                start: 'top bottom',
                end: 'bottom top',
                onEnter: () => {
                    videoRef.current.play();
                },
            },
            yPercent: 60
        })

        gsap.from('.floatingPhone3', {
            scrollTrigger: {
                trigger: '.floatingPhones',
                scrub: 1,
                start: 'top bottom',
                end: 'bottom top',
            },
            yPercent: 20
        })
    }, []);

    const videoProps = {
        className: CSS.phoneGridVideo,
        playsInline: true,
        loop: true,
        muted: true,
        preload: "none",
        style: { width: `100%`},
        innerRef: videoRef,
    }

    return (
        <section className={`floatingPhones | block bg-default minvh-100 ${CSS.removePt}`}>
            <div className="container columns-2 gap-md">
                <div className={CSS.phoneGrid}>
                    <div className='floatingPhone1'>
                        <AdvancedVideo
                            cldVid={homepageMobileVideo}
                            id='phone1'
                            {...videoProps}
                        />
                    </div>
                    <div className='floatingPhone2'>
                        <AdvancedVideo
                            cldVid={ourValueMobileVideo}
                            id='phone2'
                            {...videoProps}
                        />
                    </div>
                    <div className='floatingPhone3'>
                        <AdvancedVideo
                            cldVid={philosophyMobileVideo}
                            id='phone3'
                            {...videoProps}
                        />
                    </div>

                </div>

                <div className={`${CSS.floatingPhoneText} | maxw-30`}>
                    <div>
                        <div className="fadeUp">
                            <p className="fs-5 fw-500 c-medium">Mobile</p>
                            <p className='fw-500'>The site was crafted with care to ensure a consistent desktop and mobile experience. Through photographs, large hero headlines and educational text, the website’s wireframe makes digesting crucial brand information easier to understand.</p>
                        </div>
                        <div className="fadeUp">
                            <p className='h2 fw-500 lh-2 pt-md'>We utilized parallax scrolling to create the feeling of depth within the site, creating interest and engagement</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloatingPhones;