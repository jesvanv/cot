var bottomNav = document.getElementsByClassName('bottom-nav')[0];
var popupOverlay = document.getElementById('popup-overlay');
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
var emailLink = document.createElement('a');
emailLink.innerHTML = "<a href='mailto:" + link + "' id='email' class='email'>Email Us Today!</a>";
bottomNav.append(emailLink)

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
