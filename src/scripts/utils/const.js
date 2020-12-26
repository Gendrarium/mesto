export {
  initialCards,
  validityConfig,
  editButton,
  addButton,
  nameInput,
  jobInput,
  formElementProfile,
  formElementAdd}

const initialCards = [
  {
      name: 'Армавир',
      link: 'https://sun9-48.userapi.com/impg/bdrFY0uEccsYnlpJyNcvPsfkZ_cgolO4BbWrgg/nS6r86TRyaY.jpg?size=1800x1200&quality=96&proxy=1&sign=1a4a828215ea0eb62aa46e9e57b8f9dc&type=album'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const validityConfig = {
  formSelector: 'edit-form__form',
  inputSelector: 'edit-form__input',
  submitButtonSelector: 'edit-form__button',
  inactiveButtonClass: 'edit-form__button_disabled',
  inputErrorClass: 'edit-form__input_type_error'
};

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameInput = document.querySelector('.edit-form__input_content_name');
const jobInput = document.querySelector('.edit-form__input_content_job');
const formElementProfile = document.forms.form1;
const formElementAdd = document.forms.form2;
