export {openPopup, closePopup};
function openPopup(popup) {
  popup.classList.add('edit-form_display-flex');

  document.addEventListener('keydown', escClose);
  popup.addEventListener('mousedown', overlayClickClose);
}
function escClose(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector('.edit-form_display-flex');
    closePopup(popup);
}
}

function overlayClickClose(evt) {
  const popup = document.querySelector('.edit-form_display-flex');
  if (evt.target.classList.contains(popup.classList.item(0))) {
    closePopup(popup);
  }
}

function closePopup(popup) {
  popup.classList.remove('edit-form_display-flex');

  document.removeEventListener('keydown', escClose);
  popup.removeEventListener('mousedown', overlayClickClose);
}
