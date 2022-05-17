import React from 'react';
import style from './two-columns.module.css';

const TwoColumns = () => {
    return (
        <section className="block bg-default">
            <div className="container columns-2 gap-md">
                <div>
                    <img className='w-100pc' src="/assets/projects/chateau-de-sours/7_philosophy.jpg" alt="" />
                </div>

                <div id={style.red}>
                    <img className='w-100pc' src="/assets/projects/chateau-de-sours/8_red.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default TwoColumns;