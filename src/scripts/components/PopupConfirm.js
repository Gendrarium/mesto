import Popup from "./Popup.js"

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._element.querySelector('.edit-form__button');
  }
  setSubmitAction(sumbitAction) {
    this._renderer = sumbitAction;
  }
  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener('click', () => {
        this._renderer();
    });
  }

}
