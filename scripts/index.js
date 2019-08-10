var encoded = "fDfFx@FfSfjSZ61d7jp.76l"
var key = "156vFDJLPVgwrjRyu89fXmS2Na4HW3qcQkOZAGsdboMnl0EBxUTYtz7hCIeiKp"
var shift = encoded.length
var link = ""

for (i=0; i<encoded.length; i++) {
  if (key.indexOf(encoded.charAt(i)) == -1) {
    ltr = encoded.charAt(i)
    link += (ltr)
  }
  else {
    ltr = (key.indexOf(encoded.charAt(i)) - shift + key.length) % key.length
    link += (key.charAt(ltr))
  }
}


function addEmailLink(type) {

  switch(type) {

    case 'footer':
    var bottomNav = document.getElementsByClassName('bottom-nav')[0];
    var widerArea = document.getElementById('bottom-wide-area')
    var popupOverlay = document.getElementById('popup-overlay');

    var widerAreaContent = "<a href='mailto:" + link + "?subject=Wholesale Inquiry'>" +
          "<div class='contact wholesale'>" +
            "<h1>Wholesale inquiries?<h1>" +
            "<p>Let us know!</p>" +
          "</div>" +
        "</a>" +

          "<a href='mailto:" + link + "?subject=Customer Inquiry'>" +
          "<div class='contact consumer'>" +
            "<h1>Consumer inquiries?</h1>" +
            "<p>Happy to help!</p>" +
          "</div>" +
          "<h2 class='bottom-head'>Chasing Our Tails is committed to giving pets everything they need and crave as a healthy addition to their daily diet!</h2>"

    widerArea.innerHTML = widerAreaContent;

    var emailLink = document.createElement('a');
    emailLink.innerHTML = "<a href='mailto:" + link + "' id='email' class='email'>Email Us Today!</a>";
    bottomNav.append(emailLink)

    break;
    case 'promo-button':
      var promoButton = document.getElementById('promo-button')
      console.log('render promo email button', promoButton)
      promoButton.innerHTML = "<a id='email' class='email' href='mailto:" + link + "?subject=Duck Treats Inquiry'>Email Elena today for more details</a>";
    break;

  }

}


var showPopup = function() {
  var popupOverlayClasses = popupOverlay.classList;
  if(popupOverlayClasses.contains('showing')) {
    popupOverlayClasses.remove('showing');
  }
  else {
    popupOverlayClasses.add('showing')
  }
  console.log('showing popup', popup.classList)
}
