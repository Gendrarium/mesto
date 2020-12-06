export {validityConfig, FormValidator};

const validityConfig = {
  formSelector: 'edit-form__form',
  inputSelector: 'edit-form__input',
  submitButtonSelector: 'edit-form__button',
  inactiveButtonClass: 'edit-form__button_disabled',
  inputErrorClass: 'edit-form__input_type_error'
};

class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }
  _showError (input) {
    const error = this._form.querySelector(`#${input.id}-error`);

    error.textContent = input.validationMessage;
    input.classList.add(this._config.inputErrorClass);
  }

  _hideError(input) {
    const error = this._form.querySelector(`#${input.id}-error`);

    error.textContent = '';
    input.classList.remove(this._config.inputErrorClass);
  }

  _checkInputValidity(input) {
      if (!input.validity.valid) {
        this._showError(input);
      } else {
        this._hideError(input);
      }
  }

  _setButtonState(isActive) {
    if (isActive) {
        this._submitButton.classList.remove(this._config.inactiveButtonClass);
        this._submitButton.disabled = false;
    } else {
        this._submitButton.classList.add(this._config.inactiveButtonClass);
        this._submitButton.disabled = true;
    }
  }

  _setEventListeners() {
    this._inputsList = this._form.querySelectorAll(`.${this._config.inputSelector}`);
    this._submitButton = this._form.querySelector(`.${this._config.submitButtonSelector}`);

    this._inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            this._checkInputValidity(input);
            this._setButtonState(this._form.checkValidity());
        });
    });
  }

  resetValidationState() {

    this._inputsList.forEach((input) => {
      this._checkInputValidity(input);
      this._setButtonState(this._form.checkValidity());
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
        this._setButtonState(this._form.checkValidity())
  }
}
