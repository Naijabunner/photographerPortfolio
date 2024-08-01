// LazyImage.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import GalleryShimmer from './gallerySkeleton';

const LazyImage = ({ src, alt, skeleton: Skeleton, ...props }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative">
            {!loaded && (Skeleton ? <Skeleton /> : <GalleryShimmer />)}
            <img
                className={`h-auto max-w-full rounded-lg ${loaded ? '' : 'hidden'}`}
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                {...props}
            />
        </div>
    );
};

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    skeleton: PropTypes.elementType, // PropType for a component
};

export default LazyImage;