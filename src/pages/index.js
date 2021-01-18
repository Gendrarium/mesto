import './index.css';
import Api from '../scripts/components/Api.js';
import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupConfirm from '../scripts/components/PopupConfirm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import {
  validityConfig,
  editButton,
  addButton,
  avatarEditButton,
  avatar,
  nameInput,
  jobInput,
  formElementProfile,
  formElementAdd,
  formElementEditAvatar} from '../scripts/utils/const.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co',
  key: 'e17fa530-896d-4705-bcb2-e2630586390c'});

const userInfo = new UserInfo({selectorUserName: '.profile__title', selectorUserJob: '.profile__subtitle', selectorUserAvatar: '.profile__image'});

const popupConfirm = new PopupConfirm('.edit-form_button_del');

const addCard = new Section({
  renderer: (item) => {
    addCard.appendItem(createCard(item).generateCard());
}
}, '.grid-cards')

Promise.all([
  api.getUserData(),
  api.getInitialCards()
])
  .then((values) => {
    userInfo.setUserInfo({
      name: values[0].name,
      job: values[0].about
    });
    userInfo.saveUserId(values[0]._id);
    userInfo.setUserAvatar(values[0].avatar);
    avatar.alt = userInfo.getUserInfo().name;
    addCard.renderItems(values[1]);
  })
  .catch((err) => {
    console.log(err);
  })

const createCard = (item) => {
  const card = new Card({
    data: item,
    userId: userInfo.getUserId(),
    handleCardClick: ({name, link}) => {
    imgPopup.open({name, link});
    },
    handleLikeClick: (id, isLiked) => {
      if(isLiked) {
        api.dislikeCard(id)
          .then(res => {
            card.setLikes({likes: res.likes});
          })
          .catch(err => console.log(err));
      } else {
        api.likeCard(id)
        .then(res => {
          card.setLikes({likes: res.likes});
        })
        .catch(err => console.log(err));
      }
    },
    handleDeleteClick: (id) => {
      popupConfirm.setSubmitAction(()=> {
        api.deleteCard(id)
        .then(() => {
           card.remove();
           popupConfirm.close()
        })
        .catch(err => console.log(err));
      });
      popupConfirm.open();
    }},
     '.template-cards');
    return card;
  }
popupConfirm.setEventListeners();

const imgPopup = new PopupWithImage('.edit-form_button_img');
imgPopup.setEventListeners();

const formValidProfile = new FormValidator(validityConfig, formElementProfile);
formValidProfile.enableValidation();
const formValidElementAdd = new FormValidator(validityConfig, formElementAdd);
formValidElementAdd.enableValidation();
const formValidElementEditAvatar = new FormValidator(validityConfig, formElementEditAvatar);
formValidElementEditAvatar.enableValidation();


const editProfile = new PopupWithForm('.edit-form_button_redact',
(formData) => {

  editProfile.editButtonCaption('Сохранение...')
  api.editUserInfo(formData)
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        job: res.about});
      editProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editProfile.editButtonCaption('Сохранить')
    })
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
  addPlace.editButtonCaption('Создание...')
  api.addCard(formData)
    .then((res) => {
      addCard.prependItem(createCard(res).generateCard());
      addPlace.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      addPlace.editButtonCaption('Создать')
    })
  addPlace.close();
});

addPlace.setEventListeners();

addButton.addEventListener('click', () =>{
  addPlace.open()
  formElementAdd.reset();
  formValidElementAdd.resetValidationState();
})

const editAvatar = new PopupWithForm('.edit-form_button_avatar-edit',
(formData) => {
  editAvatar.editButtonCaption('Сохранение...')
  api.editAvatar(formData)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      avatar.alt = userInfo.getUserInfo().name;
      editAvatar.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      editAvatar.editButtonCaption('Сохранить')
    })
  editAvatar.close();
});

editAvatar.setEventListeners();

avatarEditButton.addEventListener('click', () =>{
  editAvatar.open()
  formElementEditAvatar.reset();
  formValidElementEditAvatar.resetValidationState();
})
