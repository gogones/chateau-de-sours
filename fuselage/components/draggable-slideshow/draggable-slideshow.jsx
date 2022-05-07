import React from 'react';
import {CustomCursorArea} from "../custom-cursor/custom-cursor";
import {HScroller} from "../h-scroller/h-scroller";

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
                    <img className='image w-100pc' src="/assets/projects/chateau-de-sours/cds-slider-1.jpg" alt="" />
                    <img className='image w-100pc' src="/assets/projects/chateau-de-sours/cds-slider-2.jpg" alt="" />
                    <img className='image w-100pc' src="/assets/projects/chateau-de-sours/cds-slider-3.jpg" alt="" />
                    <img className='image w-100pc' src="/assets/projects/chateau-de-sours/cds-slider-4.jpg" alt="" />
                </HScroller>

            </CustomCursorArea>
        </div>
    );
};

export default DraggableSlideshow;