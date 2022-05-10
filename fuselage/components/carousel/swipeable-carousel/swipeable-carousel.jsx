import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CSS from './swipeable-carousel.module.css';
import LeftArrow from "../../icons/left-arrow/left-arrow";
import RightArrow from "../../icons/right-arrow/right-arrow";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const SwipeableCarousel = ({images, withoutArrow}) => {
    const [index, setIndex] = React.useState(0);
    const handleChangeIndex = index => setIndex(index);

    return (
        <div className={`${CSS.swipeableRoot} maxw-100pc`}>
            <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex} slideClassName={CSS.slideContainer}>
                {images.map((image, index) => (
                    <img key={image} src={image} alt={`image-${index}`} className={CSS.slideImg} />
                ))}
            </AutoPlaySwipeableViews>

            {!withoutArrow && (
                <>
                    <button
                        disabled={index === 0}
                        className={`${CSS.buttonNavOverlay} ${CSS.left}`}
                        onClick={() => handleChangeIndex(index - 1)}>
                        <LeftArrow />
                    </button>

                    <button
                        disabled={index === images.length - 1}
                        className={`${CSS.buttonNavOverlay} ${CSS.right}`}
                        onClick={() => handleChangeIndex(index + 1)}>
                        <RightArrow />
                    </button>
                </>
            )}
        </div>
    );
};

export default SwipeableCarousel;