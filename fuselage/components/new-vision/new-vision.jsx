import React from 'react';
import CSS from "../../../pages/index.module.css";
import {gsap} from "gsap/dist/gsap";

const NewVision = () => {
    React.useEffect(() => {
        const stickFlip1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.-a-stickContent1',
                start: 'top center',
                scrub: 1,
            }
        });
        stickFlip1
            .to('.-a-stickImg1', {opacity: 0})
            .to('.-a-stickImg2', {opacity: 0});

        const stickFlip2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.-a-stickContent2',
                start: 'top center',
                scrub: 1,
            }
        });
        stickFlip2
            .to('.-a-stickImg3', {opacity: 0})
            .to('.-a-stickImg4', {opacity: 0});

    },[]);

    return (
        <section className={`${CSS.stickyGalleryContainer} block bg-default`}>
            <div>

                <div className={`${CSS.stickyGalleryContent} fadeUp -a-stickContent1`}>
                    <div className={`maxw-35 desktopPaddingLeft`}>
                        <p className='h3 fw-500'>A new vision from Alibaba founder Jack Ma</p>
                        <p className='mt-sm'>Throughout its history as a resting spot for pilgrims, a family home and a profitable vineyard, Château de Sours has always been closely tied to the land. In 2016, the estate, vineyard and surrounding land located in the Entre-Deux-Mers region of France were revived by Alibaba founder Jack Ma with a new vision.</p>
                        <p className='mt-sm'>For its latest incarnation, Château de Sours was reborn around the philosophy of permaculture and environmental responsibility - breaking from tradition to innovate the art of winemaking and land management. The Château de Sours team approached Base Creative to create a website that would reflect this innovative vision to global connoisseurs.</p>
                    </div>
                </div>

                <div className={`${CSS.stickyGalleryContent} fadeUp -a-stickContent2`}>
                    <div className={`maxw-35 desktopPaddingLeft`}>
                        <p className='h3 fw-500'>Mirroring the offline experience online</p>
                        <p className='mt-sm'>Château de Sours was reborn around the philosophy of permaculture and environmental responsibility - breaking from tradition to innovate the art of winemaking and land management. Base Creative reflected this innovative vision to global connoisseurs through an intentionally simple and uncluttered site map - allowing the key messages to be weaved through every page.</p>
                    </div>
                </div>

            </div>

            <div className={`${CSS.stickyGallery}`}>
                <div className={`${CSS.stickyGalleryImages} bg-white`}>
                    <img src="https://picsum.photos/800/803" alt="" className='-a-stickImg4' />
                    <img src="https://picsum.photos/800/802" alt="" className='-a-stickImg3' />
                    <img src="https://picsum.photos/800/801" alt="" className='-a-stickImg2' />
                    <img src="https://picsum.photos/800/800" alt="" className='-a-stickImg1' />
                </div>
            </div>

        </section>
    );
};

export default NewVision;