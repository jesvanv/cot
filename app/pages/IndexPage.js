import React, { useState, createRef } from 'react';

import { showPopup } from 'utils/popup';
import { addEmailLink  } from 'utils/email';

import { products } from 'constants/products';

import { Popup } from 'components/Popup';
import { PromoCallout } from 'components/PromoCallout';
import { ProductSection } from 'components/ProductSection';
import { ProductGallery } from 'components/ProductGallery';
import { ClosingLogos } from 'components/ClosingLogos';

import {  COMPANY_NAME,
          MISSION_DESCRIPTION,
          INTRO_TEXT,
          PROMO_TEXT,
          ADDRESS } from 'constants/text';

import '../css/sass/styles.scss';

const IndexPage = () => {

  const [ showGallery, setShowGallery ] = useState(false);

  const popup = createRef()

  const popupImageArray = [
    {
      img: 'app/images/lambtrachealabel.png',
      alt: 'Lamb Trachea Label',
      class: 'image-one'
    },
    {
      img: 'app/images/kneecap_label.jpg',
      alt: 'Beef Kneecaps Label',
      class: 'image-two'
    },
    {
      img: 'app/images/piggylabel.jpg',
      alt: 'Piggy Sticks Label',
      class: 'image-three'
    }
  ]

  const launchGallery = () => {
    setShowGallery(true);
    document.body.classList.toggle('noscroll', true)
  }

  const isEven = (n) => {
    if(n === 0 || n % 2 === 0) {
      return true;
    }
    else if(Math.abs(n % 2) === 1) {
      return false;
    }
  }

  //TODO: map over products to generate sections
  return (
    <>
    <Popup ref={popup}/>
    <div className="brand-logo-band">
    <img id="main-logo" src="app/images/cot_logo_rev_wide.svg" className="brand-logo"></img>
    </div>
    <div className="nav top-nav" onClick={() => showPopup(popup.current)}>
      <img src={"app/images/dog_bowl.png"} className="dog-bowl"></img>
      <p>This IS the Farm to Pet Bowl Revolution!</p>
    </div>
    <div className="main-col">
      <div className="sideart sideart-left"></div>
      <div className="sideart sideart-right"></div>

      <button id='new-hire' className='new-hire-callout'>
        { addEmailLink('new-hire') }
      </button>

      <PromoCallout imageArray={popupImageArray}
                    text={PROMO_TEXT} />

      <h1 className='main-head'><span className='nobreaking'>{COMPANY_NAME}</span> produces premium, natural, quality products for your pets!</h1>

      <p className="white">{MISSION_DESCRIPTION}</p>

        <p className="white">{INTRO_TEXT}</p>

        { products.map((product, i) => {

          const { header, image, bodyCopy } = product;

          return (
            <ProductSection key={`product_${i}`}
                            className={'product-type'}
                            image={image}
                            imageClass={isEven(i) ? 'product-right' : 'product-left' }
                            headCopy={header}
                            bodyCopy={bodyCopy}
            />
          )

        })}

           
            <div className="wider-area" id="bottom-wide-area">
              {addEmailLink('footer')}
            </div>

            <div className="wider-area product-gallery-launcher">
              <button onClick={launchGallery}>Click to see more products...</button>
              </div>

            <ClosingLogos />

          </div>

          <div className="nav bottom-nav">
            <span>{ADDRESS}</span>
            <a href='tel:(866) 967-0152'>(866) 967-0152</a>
            <a href='mailto:elena@nepetproducts.com'>E-Mail us Today!</a>
          </div>
          {showGallery && <ProductGallery setShowGallery={setShowGallery} />}
          </>
  )
}

export default IndexPage;
