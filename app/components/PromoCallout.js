import React from 'react';

import { addEmailLink } from '../utils/email';

export const PromoCallout = ({ imageArray, text }) => {

  const generatePromoImages = () =>
          imageArray.map((img, i) => (<img src={img.img} key={`promoImage_${i}`} alt={img.alt} className={img.class} /> ))

  return (
    <div className={"promo-callout"}>
      { generatePromoImages() }
      <p>{text}</p>
      <button id='promo-button'>
        {addEmailLink('promo-button')}
      </button>
    </div>
  )
}
