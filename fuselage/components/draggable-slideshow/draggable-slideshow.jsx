import React from 'react';
import {CustomCursorArea} from "../custom-cursor/custom-cursor";
import {HScroller} from "../h-scroller/h-scroller";
import {AdvancedImage} from "@cloudinary/react";
import {cdsSliderImg1, cdsSliderImg2, cdsSliderImg3, cdsSliderImg4} from "../../../src/cloudinary/images";

const DraggableSlideshow = ({setCursorActive, setCursorPressed}) => {
    return (
        <div
            onMouseEnter={ () => setCursorActive(true)}
            onMouseLeave={ () => setCursorActive(false)}
            onMouseDown={ () => setCursorPressed(true)}
            onMouseUp={ () => setCursorPressed(false)}
        >
            <CustomCursorArea >

                <HScroller>
                    <AdvancedImage cldImg={cdsSliderImg1} className='image w-100pc' alt="slider-image-1" />
                    <AdvancedImage cldImg={cdsSliderImg2} className='image w-100pc' alt="slider-image-2" />
                    <AdvancedImage cldImg={cdsSliderImg3} className='image w-100pc' alt="slider-image-3" />
                    <AdvancedImage cldImg={cdsSliderImg4} className='image w-100pc' alt="slider-image-4" />
                </HScroller>

            </CustomCursorArea>
        </div>
    );
};

export default DraggableSlideshow;