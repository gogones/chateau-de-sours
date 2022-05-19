import React from 'react';
import style from './two-columns.module.css';
import {AdvancedImage} from "@cloudinary/react";
import {philosophyImg, redImg} from "../../../src/cloudinary/images";

const TwoColumns = () => {
    return (
        <section className="block bg-default">
            <div className="container columns-2 gap-md">
                <div>
                    <AdvancedImage className='w-100pc' cldImg={philosophyImg} alt="philosophy" />
                </div>

                <div id={style.red}>
                    <AdvancedImage className='w-100pc' cldImg={redImg} alt="red" />
                </div>
            </div>
        </section>
    );
};

export default TwoColumns;