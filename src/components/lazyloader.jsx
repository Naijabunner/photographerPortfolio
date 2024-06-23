// LazyImage.js
import React, { useState } from 'react';
import GalleryShimmer from './gallerySkeleton';

const LazyImage = ({ src, alt, skeleton: Skeleton, ...props }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative">
            {!loaded && <GalleryShimmer />}
            <img
                className={`h-auto max-w-full rounded-lg ${loaded ? '' : 'hidden'}`}
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)} // Update the state to true when the image is loaded
                {...props}
            />
        </div>
    );
};

export default LazyImage;