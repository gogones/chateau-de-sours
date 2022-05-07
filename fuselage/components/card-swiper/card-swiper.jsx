import React from 'react';
import CSS from "../../../pages/index.module.css";
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";

const CardSwiper = () => {
    const [value, currentBreakpoint] = useBreakpoints(
        Object.keys(breakpoints),
        Object.values(breakpoints)
    );

    return (
        <section id='cardSwiperSection' className={currentBreakpoint <= 600 ? '' : 'block'}>
            <img className={`${CSS.cardSwiperImg}`} src="/assets/projects/chateau-de-sours/card-swiper-1.png" alt="" />
            <img className={`${CSS.cardSwiperImg}`} src="/assets/projects/chateau-de-sours/card-swiper-2.png" alt="" />
        </section>
    );
};

export default CardSwiper;