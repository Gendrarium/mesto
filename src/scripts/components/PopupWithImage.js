import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._element = document.querySelector(popupSelector);
    this._popupImage = this._element.querySelector('.edit-form__image');
    this._popupCaption = this._element.querySelector('.edit-form__caption');
  }
  open({name, link}) {
      super.open();
      this._popupImage.src = link;
      this._popupCaption.textContent = name;
  }
}
