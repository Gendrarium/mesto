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

initialCards.forEach(function(item) {
  const cardCopy = document.querySelector('.template-cards').content.cloneNode(true);

  const cardImage = cardCopy.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardCopy.querySelector('.card__title').textContent = item.name;

  cardImage.addEventListener('click',()=>{
    popupImage.src = item.link;
    popupCaption.textContent = item.name;

    editFormImg.classList.add('edit-form_display-flex');
  })

  const likeButton = cardCopy.querySelector('.card__like');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like_fill');
  });
  const delButton = cardCopy.querySelector('.card__del');
  delButton.addEventListener('click', () => {
    delButton.closest('.card').remove();
  });
  gridCardsSection.append(cardCopy);
});

function editButtonHandler() {
  editFormRedact.classList.add('edit-form_display-flex');

  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function addButtonHandler() {
  editFormAdd.classList.add('edit-form_display-flex');
}

function closeButtonHandler() {
  editFormRedact.classList.remove('edit-form_display-flex');
}
function closeButtonAddHandler() {
  editFormAdd.classList.remove('edit-form_display-flex');
}
function closeButtonImgHandler() {
  editFormImg.classList.remove('edit-form_display-flex');
}
function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeButtonHandler();
}

function formSubmitAddHandler (evt) {
  evt.preventDefault();

  const cardCopy = document.querySelector('.template-cards').content.cloneNode(true);

  const cardImage = cardCopy.querySelector('.card__image');
  cardImage.src = linkInputAdd.value;
  cardImage.alt = nameInputAdd.value;
  cardCopy.querySelector('.card__title').textContent = nameInputAdd.value;

  cardImage.addEventListener('click',()=>{
    popupImage.src = cardImage.src;
    popupCaption.textContent = cardImage.alt;

    editFormImg.classList.add('edit-form_display-flex');
  })

  const likeButton = cardCopy.querySelector('.card__like');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like_fill');
  });

  const delButton = cardCopy.querySelector('.card__del');
  delButton.addEventListener('click', () => {
    delButton.closest('.card').remove();
  });
  gridCardsSection.prepend(cardCopy);

  closeButtonAddHandler();
  linkInputAdd.value = '';
  nameInputAdd.value = '';
}
editButton.addEventListener('click', editButtonHandler);
closeButton.addEventListener('click', closeButtonHandler);
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', addButtonHandler);
closeButtonAdd.addEventListener('click', closeButtonAddHandler);
formElementAdd.addEventListener('submit', formSubmitAddHandler);
closeButtonImg.addEventListener('click', closeButtonImgHandler);
