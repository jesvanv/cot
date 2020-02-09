import React from 'react';

export const ProductSection = ({ image, imageClass, headCopy, bodyCopy }) => (
    <div className='product-type'>
        <img src={image} className={imageClass}></img>
        <h2>{headCopy}</h2>
        <p>{bodyCopy}</p>
    </div>
 )
