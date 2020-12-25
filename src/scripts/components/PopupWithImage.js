import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.edit-form__image');
    this._popupCaption = document.querySelector('.edit-form__caption');
  }
  open(image) {
      super.open();
      this._popupImage.src = image.src;
      this._popupCaption.textContent = image.alt;
  }
}
