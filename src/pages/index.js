import Api from '../scripts/components/Api.js';
import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import {
  initialCards,
  validityConfig,
  editButton,
  addButton,
  nameInput,
  jobInput,
  formElementProfile,
  formElementAdd} from '../scripts/utils/const.js';

const imgPopup = new PopupWithImage('.edit-form_button_img');
imgPopup.setEventListeners();

const createCard = (item) => {
  const card = new Card({
    data: item,
    handleCardClick: ({name, link}) => {
    imgPopup.open({name, link});
    }}, '.template-cards');
    return card;
}

const addCard = new Section({
  items: initialCards,
  renderer: (item) => {
    addCard.appendItem(createCard(item).generateCard());
}
}, '.grid-cards')
addCard.renderItems();

const formValidProfile = new FormValidator(validityConfig, formElementProfile);
formValidProfile.enableValidation();
const formValidElementAdd = new FormValidator(validityConfig, formElementAdd);
formValidElementAdd.enableValidation();

const userInfo = new UserInfo({selectorUserName: '.profile__title', selectorUserJob: '.profile__subtitle'});

const editProfile = new PopupWithForm('.edit-form_button_redact',
(formData) => {

  userInfo.setUserInfo({name: formData.name, job: formData.job});

  editProfile.close();
});

editProfile.setEventListeners();

editButton.addEventListener('click', () =>{
  const profile = userInfo.getUserInfo()

  nameInput.value = profile.name;
  jobInput.value = profile.job
  formValidProfile.resetValidationState();
  editProfile.open()
})

const addPlace = new PopupWithForm('.edit-form_button_add',
(formData) => {

  addCard.prependItem(createCard(formData).generateCard());
  addPlace.close();
});

addPlace.setEventListeners();

addButton.addEventListener('click', () =>{
  addPlace.open()
  formElementAdd.reset();
  formValidElementAdd.resetValidationState();
})

const assad = new Api('https://mesto.nomoreparties.co', 'e17fa530-896d-4705-bcb2-e2630586390c');

assad.getUserData();
