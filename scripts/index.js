const gridCardsSection = document.querySelector('.grid-cards');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editFormRedact = document.querySelector('.edit-form_button_redact');
const closeButton = editFormRedact.querySelector('.edit-form__close-button');
const nameInput = editFormRedact.querySelector('.edit-form__input_content_name');
const jobInput = editFormRedact.querySelector('.edit-form__input_content_job');
const formElement = editFormRedact.querySelector('.edit-form__form');
const editFormAdd = document.querySelector('.edit-form_button_add');
const closeButtonAdd = editFormAdd.querySelector('.edit-form__close-button');
const nameInputAdd = editFormAdd.querySelector('.edit-form__input_content_name');
const linkInputAdd = editFormAdd.querySelector('.edit-form__input_content_link');
const formElementAdd = editFormAdd.querySelector('.edit-form__form');
const editFormImg = document.querySelector('.edit-form_button_img');
const popupImage = editFormImg.querySelector('.edit-form__image');
const popupCaption = editFormImg.querySelector('.edit-form__caption');
const closeButtonImg = editFormImg.querySelector('.edit-form__close-button');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
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

function copyTemplate(name, link) {
  const cardCopy = document.querySelector('.template-cards').content.cloneNode(true);
  const cardImage = cardCopy.querySelector('.card__image');

  cardImage.src = link;
  cardImage.alt = name;
  cardCopy.querySelector('.card__title').textContent = name;
  cardImage.addEventListener('click',()=>{
    popupImage.src = cardImage.src;
    popupCaption.textContent = cardImage.alt;
    openPopup(editFormImg);
  })

  const likeButton = cardCopy.querySelector('.card__like');
  likeButton.addEventListener('click', () => {
   likeButton.classList.toggle('card__like_fill');
  });

  const delButton = cardCopy.querySelector('.card__del');
  delButton.addEventListener('click', () => {
    delButton.closest('.card').remove();
  });

  return cardCopy;
}

initialCards.forEach(function(item) {
  gridCardsSection.append(copyTemplate(item.name, item.link));
});

function openPopup(popup) {
  popup.classList.add('edit-form_display-flex');
}

function closePopup(popup) {
  popup.classList.remove('edit-form_display-flex');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(editFormRedact);
}

function formSubmitAddHandler (evt) {
  evt.preventDefault();

  gridCardsSection.prepend(copyTemplate(nameInputAdd.value, linkInputAdd.value));
  closePopup(editFormAdd);
  formElementAdd.reset();
}

editButton.addEventListener('click', ()=>{
  openPopup(editFormRedact);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
closeButton.addEventListener('click', ()=>{
  closePopup(editFormRedact);
});
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', ()=>{
  openPopup(editFormAdd);
});
closeButtonAdd.addEventListener('click', ()=>{
  closePopup(editFormAdd);
});
formElementAdd.addEventListener('submit', formSubmitAddHandler);
closeButtonImg.addEventListener('click', ()=>{
  closePopup(editFormImg);
});
