import React from 'react';

const TwoColumns = () => {
    return (
        <section className="block bg-default">
            <div className="container columns-2 gap-md">
                <div>
                    <img className='w-100pc' src="/assets/projects/chateau-de-sours/cds-webpage-1.jpg" alt="" />
                </div>

                <div>
                    <img className='w-100pc' src="/assets/projects/chateau-de-sours/cds-webpage-2.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default TwoColumns;