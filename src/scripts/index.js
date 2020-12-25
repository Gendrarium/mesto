import './pages/index.css'
import Section from './components/Section.js';
import Card from './components/Card.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import FormValidator from './components/FormValidator.js';
import {
  initialCards,
  validityConfig,
  editButton,
  addButton,
  nameInput,
  jobInput,
  formElementProfile,
  formElementAdd} from './utils/const.js';


const addCard = new Section({
  items: initialCards,
  renderer: (item) => {
      const card = new Card({
        data: item,
        handleCardClick: () => {
          const imgPopup = new PopupWithImage('.edit-form_button_img');
          imgPopup.open(card._image);
          imgPopup.setEventListeners();
        }}, '.template-cards');
      addCard.appendItem(card.generateCard());
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

  const card =new Card({data: formData,
    handleCardClick: () => {
      const imgPopup = new PopupWithImage('.edit-form_button_img');
      imgPopup.open(card._image);
      imgPopup.setEventListeners();
    }
  }, '.template-cards')
  addCard.prependItem(card.generateCard());
  addPlace.close();
});

addPlace.setEventListeners();

addButton.addEventListener('click', () =>{
  addPlace.open()
  formElementAdd.reset();
  formValidElementAdd.resetValidationState();
})
