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
  nameInput,
  jobInput,
  formElementProfile,
  formElementAdd} from '../scripts/utils/const.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co',
  key: 'e17fa530-896d-4705-bcb2-e2630586390c'});

const userInfo = new UserInfo({selectorUserName: '.profile__title', selectorUserJob: '.profile__subtitle'});

const popupConfirm = new PopupConfirm('.edit-form_button_del');
popupConfirm.setEventListeners();

const createCard = (item) => {
  const card = new Card({
    data: item,
    userId: 'df7c5cd67e58db4982641440',
    handleCardClick: ({name, link}) => {
    imgPopup.open({name, link});
    },
    handleLikeClick: (likeButton, id, isLiked) => {
      if(isLiked) {
        likeButton.classList.remove('card__like_fill');
        api.dislikeCard(id)
          .then(res => {
            card.setLikes(res);
          })
          .catch(err => console.log(err));
      } else {
        likeButton.classList.add('card__like_fill');
        api.likeCard(id)
        .then(res => {
          card.setLikes(res);
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

const imgPopup = new PopupWithImage('.edit-form_button_img');
imgPopup.setEventListeners();

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
    addCard.renderItems(values[1]);
  })
  .catch((err) => {
    console.log(err);
  })

const formValidProfile = new FormValidator(validityConfig, formElementProfile);
formValidProfile.enableValidation();
const formValidElementAdd = new FormValidator(validityConfig, formElementAdd);
formValidElementAdd.enableValidation();


const editProfile = new PopupWithForm('.edit-form_button_redact',
(formData) => {

  //задаём кнопке отправки текст "Сохранение..."
  //api.методОтправляющийДанные(отправляемые на сервер данные)
  //.then((данныеКоторыеВернулСервер) => {
  //  сохраняем данные на странице - вызов setUserInfo или добавление карточки
 //   закрываем попап
  //})
  //.catch(() => {
  //  выводим в консоль сообщение об ошибке
 // })
 // .finally(() => {
 //   возвращаем обратно текст кнопки
  //})
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
