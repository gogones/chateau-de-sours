import React from 'react';
import CSS from "../../../pages/index.module.css";
import {gsap} from "gsap/dist/gsap";
import useBreakpoints from "@thebiltheory/usebreakpoints";
import {breakpoints} from "../../utils/breakpoints";

const Hero = () => {
    React.useEffect(() => {
            const hero = gsap.timeline({
                scrollTrigger: {
                    trigger: '.-a-hero',
                    start: 'top-=80 top',
                    scrub: 1,
                    pin: true
                }
            });

            hero.from('.-a-heroBackground', {yPercent: 100, opacity: 0})
                .from('.-a-heroWidget', {yPercent: 200, opacity: 0})
                .to('.-a-heroForeground', {yPercent: -20, opacity: 0});

    }, []);

    return (
        <section className={`${CSS.hero} -a-hero`}>
            <div className={`${CSS.heroForeground} -a-heroForeground`}>
                <div className="desktopPaddingLeft">
                    <p className="eyebrow fs-5 fw-500">Chateau de Sours</p>
                    <p className="fs-xl fw-500 lh-1 maxw-60">Expressing balance and harmony</p>
                    <div className={`${CSS.heroWidget} -a-heroWidget`}>
                        <p className='pt-sm'>
                            <img src="/assets/projects/chateau-de-sours/cds-logo@2x.png" alt="" style={{ width: `100%`}} />
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${CSS.heroBackground} -a-heroBackground`}>
                <img src="/assets/projects/chateau-de-sours/cds-hero.jpg" alt="" />
            </div>
        </section>
    );
};

export default Hero;