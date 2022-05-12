import React from 'react';
import CSS from "../../../pages/index.module.css";
import {gsap} from "gsap/dist/gsap";
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";

const Challenge = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    React.useEffect(() => {
        const scrollTrigger = {
            trigger: `.${CSS.cardSwiperImgContainer}`,
            scrub: 1,
        };

        const vars = {
            opacity: 0.2,
            stagger: 1,
            paddingTop: '4rem',
            paddingLeft: '4rem',
            paddingRight: '4rem',
        }
        if(value && currentBreakpoint > breakpoints.sm) {
            gsap.to(`.${CSS.cardSwiperImg}`, {...vars, scrollTrigger: {...scrollTrigger, start: 'top-=10% middle',}})
        } else if(value && currentBreakpoint <= breakpoints.sm) {
            gsap.to(`.${CSS.cardSwiperImg}`, {
                ...vars,
                paddingTop: '2rem',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                scrollTrigger: {...scrollTrigger, start: 'top-=150rem middle'},
            })
        }
    }, [currentBreakpoint, value]);

    return (
        <section className='block'>
            <div className='maxw-45 desktopPaddingLeft'>
                <p className='fw-500'>Challenge</p>
                <p className='fs-3 fw-500 maxw-25'>A new vision from Alibaba founder Jack Ma</p>
                <p>
                    Throughout its history as a resting spot for pilgrims, a family home and a profitable vineyard, Château de Sours has always been closely tied to the land. In 2016, the estate, vineyard and surrounding land located in the Entre-Deux-Mers region of France were revived by Alibaba founder Jack Ma with a new vision.
                </p>
                <p>
                    For its latest incarnation, Château de Sours was reborn around the philosophy of permaculture and environmental responsibility – breaking from tradition to innovate the art of winemaking and land management. He wanted to set a new benchmark for other progressive vineyards to reimagine the way they manage their vineyards.
                </p>
                <p>
                    The Château de Sours team approached Base Creative to create a website that would reflect this innovative vision to global connoisseurs.
                </p>
            </div>

            <div className={`${CSS.cardSwiperImgContainer}`}>
                <img className={`${CSS.cardSwiperImg}`} src="/assets/projects/chateau-de-sours/card-swiper-1.png" alt="" />
                <img className={`${CSS.cardSwiperImg}`} src="/assets/projects/chateau-de-sours/card-swiper-2.png" alt="" />
            </div>
        </section>
    );
};

export default Challenge;