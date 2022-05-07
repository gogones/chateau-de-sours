import React from 'react';
import CSS from "../../../pages/index.module.css";
import {gsap} from "gsap/dist/gsap";

const FloatingPhones = () => {
    React.useEffect(() => {
        gsap.to('.floatingPhone2', {
            scrollTrigger: {
                trigger: '.floatingPhones',
                scrub: 1,
                start: 'top bottom',
                end: 'bottom top',
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
    return (
        <section className="floatingPhones | block bg-default minvh-100">
            <div className="container columns-2 gap-md">
                <div className={CSS.phoneGrid}>
                    <div className='floatingPhone1'>
                        <video
                            id='phone1'
                            className={CSS.phoneGridVideo}
                            playsInline={true}
                            autoPlay={true}
                            loop={true}
                            preload="auto"
                            muted={true}
                            style={{ width: `100%`}}
                        >
                            <source src="/assets/projects/chateau-de-sours/2_homepage_mobile.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className='floatingPhone2'>
                        <video
                            id='phone2'
                            className={CSS.phoneGridVideo}
                            playsInline={true}
                            autoPlay={true}
                            loop={true}
                            preload="auto"
                            muted={true}
                            style={{ width: `100%`}}
                        >
                            <source src="/assets/projects/chateau-de-sours/3_our_value_mobile.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className='floatingPhone3'>
                        <video
                            id='phone3'
                            className={CSS.phoneGridVideo}
                            playsInline={true}
                            autoPlay={true}
                            loop={true}
                            preload="auto"
                            muted={true}
                            style={{ width: `100%`}}
                        >
                            <source src="/assets/projects/chateau-de-sours/4_philosophy_mobile.mp4" type="video/mp4" />
                        </video>
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