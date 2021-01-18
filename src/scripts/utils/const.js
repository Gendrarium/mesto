export {
  validityConfig,
  editButton,
  addButton,
  avatar,
  avatarEditButton,
  nameInput,
  jobInput,
  formElementProfile,
  formElementAdd,
  formElementEditAvatar}

const validityConfig = {
  formSelector: 'edit-form__form',
  inputSelector: 'edit-form__input',
  submitButtonSelector: 'edit-form__button',
  inactiveButtonClass: 'edit-form__button_disabled',
  inputErrorClass: 'edit-form__input_type_error'
};

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const avatarEditButton = document.querySelector('.profile__edit-image')
const avatar = document.querySelector('.profile__image')
const nameInput = document.querySelector('.edit-form__input_content_name');
const jobInput = document.querySelector('.edit-form__input_content_job');
const formElementProfile = document.forms.form1;
const formElementAdd = document.forms.form2;
const formElementEditAvatar = document.forms.form4;
