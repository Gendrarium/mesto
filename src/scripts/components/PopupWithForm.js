import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSumbitForm) {
    super(popupSelector);
    this._formSumbit = handleSumbitForm;
    this._confirmButton = this._element.querySelector('.edit-form__button');
    this._handleSumbitForm = this._handleSumbitForm.bind(this);
  }
  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.edit-form__input');

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
  editButtonCaption(caption) {
    this._confirmButton.textContent = caption;
  }

  _handleSumbitForm(evt) {
    evt.preventDefault();

    this._formSumbit(this._getInputValues());
  }
  setEventListeners() {
    super.setEventListeners();
    this._element.querySelector('.edit-form__form').addEventListener('submit', this._handleSumbitForm);
  }
}
