import React from 'react';

import { addEmailLink } from '../utils/email';

export const PromoCallout = ({ imageArray, text }) => {

  const generatePromoImages = () =>
          imageArray.map((img, i) => (<img src={img.img} key={`promoImage_${i}`} alt={img.alt} className={img.class} /> ))

  return (
    <div className={"promo-callout"}>
      <img src={'app/images/four_bags_w_chips_peaked.png'} className='single-image' />
      <p className='promo-callout-text' >{text[0]}</p>
      <p className='promo-callout-text' >{text[1]}</p>
      <p className='promo-callout-text' >{text[2]}</p>
      <button id='promo-button'>
        {addEmailLink('promo-button')}
      </button>
    </div>
  )
}
