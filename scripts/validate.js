const validityConfig = {
  formSelector: 'edit-form__form',
  inputSelector: 'edit-form__input',
  submitButtonSelector: 'edit-form__button',
  inactiveButtonClass: 'edit-form__button_disabled',
  inputErrorClass: 'edit-form__input_type_error'
};

function showError (form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);

  error.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
}

function hideError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);

  error.textContent = '';
  input.classList.remove(config.inputErrorClass);
}

function checkInputValidity(form, input, config) {
    if (!input.validity.valid) {
        showError(form, input, config);
    } else {
        hideError(form, input, config);
    }
}

function setButtonState(button, isActive, config) {
  if (isActive) {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
  } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
  }
}

function setEventListeners(form, config) {
  const inputsList = form.querySelectorAll(`.${config.inputSelector}`);
  const submitButton = form.querySelector(`.${config.submitButtonSelector}`);

  inputsList.forEach((input) => {
      input.addEventListener('input', () => {
          checkInputValidity(form, input, config);
          setButtonState(submitButton, form.checkValidity(), config);
      });
  });
}

function resetValidationState(form, config) {
  const inputsList = form.querySelectorAll(`.${config.inputSelector}`);
  const submitButton = form.querySelector(`.${config.submitButtonSelector}`);

  inputsList.forEach((input) => {
          checkInputValidity(form, input, config);
          setButtonState(submitButton, form.checkValidity(), config);
  });
}

function enableValidation(config) {
  const forms = document.querySelectorAll(`.${config.formSelector}`);
  forms.forEach((form) => {
      setEventListeners(form, config);

      form.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });

      const submitButton = form.querySelector(`.${config.submitButtonSelector}`);
      setButtonState(submitButton, form.checkValidity(), config)
  });
}

enableValidation(validityConfig);