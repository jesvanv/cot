import React, { forwardRef } from 'react';
import { showPopup } from 'utils/popup'

export const Popup = forwardRef((props, ref) => (
  <div  id="popup-overlay"
        ref={ref}
        className={"popup-overlay" }
        onClick={() => showPopup(ref.current)}
        >
    <img id="popup"
    src="app/images/Pet_age_ad-nofoot-web.jpg"
    alt="Farm to Pet Bowl Revolution Ad"
    className={"popup"}>
    </img>
  </div>
))
