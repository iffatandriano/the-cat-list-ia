import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

interface RatingStarProps {
    star?: any;
}

const RatingStar: React.FC<RatingStarProps> = ({ star }) => {
    return (
        <Rating
            value={star}
            style={{
                width: 100,
                height: 20,
            }}
        />
    );
};

export default RatingStar;