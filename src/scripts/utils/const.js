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
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
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
