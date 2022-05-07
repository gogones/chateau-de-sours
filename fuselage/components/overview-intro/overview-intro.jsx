import React from 'react';
import CSS from "../../../pages/index.module.css";
import ArrowButton from "../arrow-button/arrow-button";

const OverviewIntro = () => {
    return (
        <section className={`${CSS.overviewIntroduction} -a-overviewIntroduction | block`}>
            <div className='flex ai-center'>

                <div className='maxw-50 desktopPaddingLeft'>
                    <p className="fs-5 fw-500 c-medium | fadeUp">Overview</p>
                    <p className='h1 fw-500 lh-1 | fadeUp'>Crafting a website for a historic 300-year old french vineyard with a sustainable vision</p>
                    <p className='h1 fw-500 lh-1 | fadeUp'>Defining the new brand’s visual style and brand voice.</p>
                    <p className='h1 fw-500 lh-1 | fadeUp'>Immersing virtual visitors into the unique Château de Sours experience.</p>

                    <section className='mt-lg | fadeUp'>
                        <p className="fs-5 fw-500 c-medium">Brand extension through to web development</p>
                        <p className='mt-sm fw-600' style={{ columnCount: 2 }}>Brand Strategy and value proposition <br/>
                            Copywriting and translations <br/>
                            Experience strategy<br/>
                            Photography style<br/>
                            User interface<br/>
                            Design and Art Direction Website development<br/>
                            3 language versions</p>
                        <div className="mt-sm">
                            <ArrowButton url="/" label="See live website"/>
                        </div>
                    </section>
                </div>

            </div>
        </section>
    );
};

export default OverviewIntro;