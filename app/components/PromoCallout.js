import React from 'react';

import { Button } from 'components/Button'
import { addEmailLink } from '../utils/email';

export const PromoCallout = ({ imageArray, text }) => {

  const generatePromoImages = () =>
          imageArray.map((img, i) => (<img src={img.img} key={`promoImage_${i}`} alt={img.alt} className={img.class} /> ))

  return (
    <div className={"promo-callout"}>
      { generatePromoImages() }
      <p>{text}</p>
      <Button id='promo-button'>
        {addEmailLink('promo-button')}
      </Button>
    </div>
  )
}
