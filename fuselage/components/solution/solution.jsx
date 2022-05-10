import React from 'react';
import CSS from "../../../pages/index.module.css";
import SwipeableCarousel from "../carousel/swipeable-carousel/swipeable-carousel";
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";
import {gsap} from "gsap/dist/gsap";

const Solution = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    React.useEffect(() => {
        if(currentBreakpoint > 600 && document.querySelector("body").clientWidth > '900'){
            const scrollTrigger = {
                scrub: 1,
                pin: true,
            };

            gsap.to(`.${CSS.swipeableLeftParagraph}`, {
                scrollTrigger: {
                    ...scrollTrigger,
                    trigger: `.${CSS.swipeableLeftParagraph}`,
                    start: 'top-=10% middle',
                },
            })

            gsap.to(`#container-1`, {
                scrollTrigger: {
                    ...scrollTrigger,
                    trigger: `#container-1`,
                    start: 'top-=10% middle',
                },
                opacity: 0,
            })

            gsap.to(`#container-2`, {
                scrollTrigger: {
                    ...scrollTrigger,
                    trigger: `#container-2`,
                    pin: false,
                },
            })

        }
    }, [currentBreakpoint])

    if (currentBreakpoint <= 600) {
        return (
            <section className='bg-default minvh-100'>
                <div className='container'>
                    <div className={`${CSS.swipeableLeftParagraph} maxw-30`}>
                        <div className={CSS.paddingLeft}>
                            <p className='fw-500'>
                                Solution
                            </p>
                            <p className='fs-3 fw-500 maxw-25'>
                                The Château de Sours experience begins onscreen
                            </p>
                            <p>
                                Château de Sours was reborn around the philosophy of permaculture and environmental responsibility – breaking from tradition to innovate the art of winemaking and land management.
                            </p>
                            <p>
                                Before visitors begin the physical journey of discovery at Château de Sours they will first browse the website. We developed key user experience principles that would mirror the offline experience and innovative vision to global connoisseurs. Every moment on the site must be:
                            </p>
                        </div>

                        <div>
                            <SwipeableCarousel
                                withoutArrow
                                images={[
                                    '/assets/projects/chateau-de-sours/chateau-experience-strategy-01.jpg',
                                    '/assets/projects/chateau-de-sours/chateau-experience-strategy-02.jpg',
                                    '/assets/projects/chateau-de-sours/chateau-experience-strategy-03.jpg',
                                ]} />
                        </div>

                        <div className={CSS.paddingLeft}>
                            <p className='fs-3 fw-500'>
                                Informative
                            </p>
                            <p>
                                Expressing the key messages of the sustainablity in direct an compelling ways.
                            </p>

                            {/* New Paragraph */}
                            <p className='fs-3 fw-500'>
                                Attractive
                            </p>
                            <p>
                                Château de Sours is a naturally stunning destination where nature plays centre stage. We reflected this through large images and uncluttered page grids.
                            </p>

                            {/* New Paragraph */}
                            <p className='fs-3 fw-500'>
                                Easy to navigate
                            </p>
                            <p>
                                As much as possible navigation should be intuitive and self explanatory. We Intentionally kept the site map simple and uncluttered site map
                            </p>
                        </div>

                        <div>
                            <SwipeableCarousel
                                withoutArrow
                                images={[
                                    '/assets/projects/chateau-de-sours/chateau-experience-strategy-04.jpg',
                                    '/assets/projects/chateau-de-sours/chateau-experience-strategy-05.jpg',
                                    '/assets/projects/chateau-de-sours/chateau-experience-strategy-06.jpg',
                                    '/assets/projects/chateau-de-sours/chateau-experience-strategy-07.jpg',
                                    '/assets/projects/chateau-de-sours/chateau-experience-strategy-08.jpg',
                                ]} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className={`block bg-default minvh-100 ${CSS.solutionContainer}`}>
            <div className='container columns-2 gap-md' style={{position: 'sticky'}}>
                <div className={`${CSS.swipeableLeftParagraph} maxw-30`}>
                    <div>
                        {/* New Paragraph */}
                        <p className='fw-500'>
                            Solution
                        </p>
                        <p className='fs-3 fw-500 maxw-25'>
                            The Château de Sours experience begins onscreen
                        </p>
                        <p>
                            Château de Sours was reborn around the philosophy of permaculture and environmental responsibility – breaking from tradition to innovate the art of winemaking and land management.
                        </p>
                        <p>
                            Before visitors begin the physical journey of discovery at Château de Sours they will first browse the website. We developed key user experience principles that would mirror the offline experience and innovative vision to global connoisseurs. Every moment on the site must be:
                        </p>

                        {/* New Paragraph */}
                        <p className='fs-3 fw-500'>
                            Informative
                        </p>
                        <p>
                            Expressing the key messages of the sustainablity in direct an compelling ways.
                        </p>

                        {/* New Paragraph */}
                        <p className='fs-3 fw-500'>
                            Attractive
                        </p>
                        <p>
                            Château de Sours is a naturally stunning destination where nature plays centre stage. We reflected this through large images and uncluttered page grids.
                        </p>

                        {/* New Paragraph */}
                        <p className='fs-3 fw-500'>
                            Easy to navigate
                        </p>
                        <p>
                            As much as possible navigation should be intuitive and self explanatory. We Intentionally kept the site map simple and uncluttered site map
                        </p>
                    </div>
                </div>

                {/* Slideshow container */}
                <div id='trigger-123'>
                    {/* First slideshow */}
                    <div id={`container-1`} className={`${CSS.swipeableContainer} container-123`}>
                        <SwipeableCarousel
                            withoutArrow
                            images={[
                                '/assets/projects/chateau-de-sours/chateau-experience-strategy-01.jpg',
                                '/assets/projects/chateau-de-sours/chateau-experience-strategy-02.jpg',
                                '/assets/projects/chateau-de-sours/chateau-experience-strategy-03.jpg',
                            ]} />
                    </div>

                    {/* Second Slideshow */}
                    <div id={`container-2`} className={`${CSS.swipeableContainer} container-123`}>
                        <SwipeableCarousel
                            withoutArrow
                            images={[
                                '/assets/projects/chateau-de-sours/chateau-experience-strategy-04.jpg',
                                '/assets/projects/chateau-de-sours/chateau-experience-strategy-05.jpg',
                                '/assets/projects/chateau-de-sours/chateau-experience-strategy-06.jpg',
                                '/assets/projects/chateau-de-sours/chateau-experience-strategy-07.jpg',
                                '/assets/projects/chateau-de-sours/chateau-experience-strategy-08.jpg',
                            ]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;