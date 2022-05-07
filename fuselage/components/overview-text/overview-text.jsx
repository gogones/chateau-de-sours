import React from 'react';
import CSS from "../../../pages/index.module.css";

const OverviewText = () => {
    return (
        <section className={`${CSS.overviewText} block`}>
            <div className="desktopPaddingLeft | fadeUp">
                <div className='grid columns-2'>
                    <div>
                        <p className="fs-5 fw-500 c-medium">Results</p>
                    </div>

                    <div />
                </div>

                <div className='grid columns-2 mt-xs'>
                    <div>
                        <p className="fs-xl fw-500 lh-1 c-black">125%</p>
                    </div>
                    <div className='maxw-30'>
                        <p className='fs-2 fw-500 lh-2'>Increase in traffic <br/>since launch</p>
                        <p className='fw-500'>Since the website relaunch the organic traffic has increased 237% with users visiting more pages and spending an average of 3x longer on the page</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewText;