import {Card} from './Card.js';
import {validityConfig, FormValidator} from './FormValidator.js';
import {initialCards} from './const.js';
import {openPopup, closePopup} from './utils.js';

const gridCardsSection = document.querySelector('.grid-cards');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editFormRedact = document.querySelector('.edit-form_button_redact');
const closeButton = editFormRedact.querySelector('.edit-form__close-button');
const nameInput = editFormRedact.querySelector('.edit-form__input_content_name');
const jobInput = editFormRedact.querySelector('.edit-form__input_content_job');
const formElementProfile = editFormRedact.querySelector('.edit-form__form');
const editFormAdd = document.querySelector('.edit-form_button_add');
const closeButtonAdd = editFormAdd.querySelector('.edit-form__close-button');
const nameInputAdd = editFormAdd.querySelector('.edit-form__input_content_name');
const linkInputAdd = editFormAdd.querySelector('.edit-form__input_content_link');
const formElementAdd = editFormAdd.querySelector('.edit-form__form');
const editFormImg = document.querySelector('.edit-form_button_img');
const closeButtonImg = editFormImg.querySelector('.edit-form__close-button');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');


initialCards.forEach((item) => {
  const card = new Card(item, '.template-cards');
  gridCardsSection.append(card.generateCard());
});

const formValidProfile = new FormValidator(validityConfig, formElementProfile);
formValidProfile.enableValidation();
const formValidElementAdd = new FormValidator(validityConfig, formElementAdd);
formValidElementAdd.enableValidation();

function submitProfileForm (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(editFormRedact);
}

function submitAddForm (evt) {
  evt.preventDefault();
  const card =new Card({name: nameInputAdd.value, link: linkInputAdd.value}, '.template-cards')
  gridCardsSection.prepend(card.generateCard());
  closePopup(editFormAdd);
}

editButton.addEventListener('click', ()=>{
  openPopup(editFormRedact);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  formValidProfile.resetValidationState();
});
closeButton.addEventListener('click', ()=>{
  closePopup(editFormRedact);
});
formElementProfile.addEventListener('submit', submitProfileForm);
addButton.addEventListener('click', ()=>{
  openPopup(editFormAdd);
  formElementAdd.reset();
  formValidElementAdd.resetValidationState();
});
closeButtonAdd.addEventListener('click', ()=>{
  closePopup(editFormAdd);
});
formElementAdd.addEventListener('submit', submitAddForm);
closeButtonImg.addEventListener('click', ()=>{
  closePopup(editFormImg);
});
