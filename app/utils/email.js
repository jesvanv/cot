import React from 'react';

import { BUTTON_TEXT } from 'constants/text';

let encoded = "fDfFx@FfSfjSZ61d7jp.76l"
let key = "156vFDJLPVgwrjRyu89fXmS2Na4HW3qcQkOZAGsdboMnl0EBxUTYtz7hCIeiKp"
let shift = encoded.length
let link = ""
let ltr = ''

for (var i=0; i<encoded.length; i++) {
  if (key.indexOf(encoded.charAt(i)) == -1) {
    ltr = encoded.charAt(i)
    link += (ltr)
  }
  else {
    ltr = (key.indexOf(encoded.charAt(i)) - shift + key.length) % key.length
    link += (key.charAt(ltr))
  }
}

export const addEmailLink = (type) => {

  switch(type) {
    case 'footer':
      return ( 
                <>
                <h2 className='bottom-head'>Chasing Our Tails is committed to giving pets everything they need and crave as a healthy addition to their daily diet!</h2>
                  <a href={`mailto:${link}?subject=Wholesale Inquiry`}>
                    <div className='contact wholesale'> 
                      <h1>Wholesale inquiries?</h1>
                      <p>Let us know!</p>
                    </div>
                    </a>
                  <a href={`mailto:${link}?subject=Customer Inquiry`}>
                  <div className='contact consumer'>
                    <h1>Consumer inquiries?</h1>
                    <p>Happy to help!</p>
                  </div>
                  </a>
                </>
              )

    case 'promo-button':
      return (<a id='email' className='email' href={`mailto:${link}?subject=Duck Treats Inquiry`}>{BUTTON_TEXT}</a>);

    case 'new-hire': 
    return (<a id='new-hire-email' className='email' href={`mailto:${link}?subject=Open Positions Inquiry`}>Ask us about open positions!</a>);
    default:
      return null;

  }

}
