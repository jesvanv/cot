export const showPopup = (popup) => {
  console.log(popup)
  var popupOverlayClasses = popup.classList;
  if(popupOverlayClasses.contains('showing')) {
    popupOverlayClasses.remove('showing');
  }
  else {
    popupOverlayClasses.add('showing')
  }
  console.log('showing popup', popup.classList)
}
