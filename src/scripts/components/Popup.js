export default class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
    this._element = document.querySelector(popupSelector);
    this._closeButton = this._element.querySelector('.edit-form__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._overlayClickClose = this._overlayClickClose.bind(this);
  }
  open() {
    this._element.classList.add('edit-form_display-flex');

    document.addEventListener('keydown', this._handleEscClose);
    this._element.addEventListener('mousedown', this._overlayClickClose);
  }
  close() {
    this._element.classList.remove('edit-form_display-flex');

    document.removeEventListener('keydown', this._handleEscClose);
    this._element.removeEventListener('mousedown', this._overlayClickClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _overlayClickClose(evt) {
    if (evt.target.classList.contains(this._element.classList.item(0))) {
      this.close();
    }
  }
  setEventListeners() {
    this._closeButton.addEventListener('click', ()=>{
      this.close();
    });
  }
}
