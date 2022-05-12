import React from 'react';
import CSS from "../../../pages/index.module.css";
import {gsap} from "gsap/dist/gsap";
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";

const HeroMobile = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    React.useEffect(() => {
        gsap.from('#hero-background', {
                yPercent: 30,
                opacity: 0,
                scrollTrigger: {
                    trigger: '#hero-container',
                    start: 'top-=80 top',
                    scrub: 1,
                }
            });

            gsap.from(`.${CSS.heroWidget}`, {
                yPercent: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: '#hero-container',
                    start: 'top top',
                    scrub: 1,
                }
            });

            gsap.to('#text-hero', {
                yPercent: -25,
                opacity: 0,
                scrollTrigger: {
                    trigger: '#hero-background',
                    start: 'center center',
                    scrub: 1,
                }
            });

    }, [currentBreakpoint, value]);

        return (
            <section style={{height: '100vh'}}>
                <div id='hero-container' style={{
                    position: 'relative',
                }}>
                    <div
                        style={{
                            width: '100%',
                            height: '100vh',
                            backgroundColor: '#956285',
                            position: 'absolute',
                            top: 0,
                        }}
                    />

                    <div id='text-hero'
                         style={{
                             position: 'fixed',
                             top: '5rem',
                             zIndex: '1',
                         }}
                    >
                        <div className="desktopPaddingLeft" style={{
                            padding: '4rem 1.75rem',
                            color: 'white',
                        }}>
                            <p className="eyebrow fs-5 fw-500">Chateau de Sours</p>
                            <p className="fs-xl fw-500 lh-1 maxw-60">Expressing balance and harmony</p>
                            <div className={`${CSS.heroWidget}`}>
                                <p className='pt-sm'>
                                    <img src="/assets/projects/chateau-de-sours/cds-logo@2x.png" alt="" style={{ width: `100%`}} />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        id={'hero-background'}
                        style={{
                            top: 0,
                            position: 'absolute',
                        }}>
                        <img style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100vh',
                        }} src="/assets/projects/chateau-de-sours/cds-hero.jpg" alt="" />
                    </div>


                </div>
            </section>
        )
};

export default HeroMobile;