import React from 'react';

import { BUTTON_TEXT } from '../constants/text';

import { Button } from 'components/Button'

export const PromoCallout = ({ imageArray, text }) => {

  const generatePromoImages = () =>
          imageArray.map((img, i) => (<img src={img.img} key={`promoImage_${i}`} alt={img.alt} className={img.class} /> ))

  return (
    <div className={"promo-callout"}>
      { generatePromoImages() }
      <p>{text}</p>
      <Button text={BUTTON_TEXT} />
    </div>
  )
}
