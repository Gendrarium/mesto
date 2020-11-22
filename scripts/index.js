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
const popupImage = editFormImg.querySelector('.edit-form__image');
const popupCaption = editFormImg.querySelector('.edit-form__caption');
const closeButtonImg = editFormImg.querySelector('.edit-form__close-button');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const card = document.querySelector('.template-cards').content;

function likeCard(card) {
  const likeButton = card.querySelector('.card__like');
  likeButton.addEventListener('click', () => {
   likeButton.classList.toggle('card__like_fill');
  });
}

function delCard(card) {
  const delButton = card.querySelector('.card__del');
  delButton.addEventListener('click', () => {
    delButton.closest('.card').remove();
  });
}

function fullSizeImage(image) {
  image.addEventListener('click',()=>{
    popupImage.src = image.src;
    popupCaption.textContent = image.alt;
    openPopup(editFormImg);
  })
}

function copyTemplate(name, link) {
  const cardCopy = card.cloneNode(true);
  const cardImage = cardCopy.querySelector('.card__image');

  cardImage.src = link;
  cardImage.alt = name;
  cardCopy.querySelector('.card__title').textContent = name;

  fullSizeImage(cardImage);
  likeCard(cardCopy);
  delCard(cardCopy);

  return cardCopy;
}

initialCards.forEach(function(item) {
  gridCardsSection.append(copyTemplate(item.name, item.link));
});

function escClose(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector('.edit-form_display-flex');
    closePopup(popup);
}
}

function overlayClickClose(evt) {
  const popup = document.querySelector('.edit-form_display-flex');
  if (evt.target.classList.contains(popup.classList.item(0))) {
    closePopup(popup);
  }
}

function openPopup(popup) {
  popup.classList.add('edit-form_display-flex');

  document.addEventListener('keydown', escClose);
  popup.addEventListener('mousedown', overlayClickClose);
}

function closePopup(popup) {
  popup.classList.remove('edit-form_display-flex');

  document.removeEventListener('keydown', escClose);
  popup.removeEventListener('mousedown', overlayClickClose);
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
}

editButton.addEventListener('click', ()=>{
  openPopup(editFormRedact);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  resetValidationState(formElementProfile, validityConfig);
});
closeButton.addEventListener('click', ()=>{
  closePopup(editFormRedact);
});
formElementProfile.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', ()=>{
  openPopup(editFormAdd);
  formElementAdd.reset();
  resetValidationState(formElementAdd, validityConfig);
});
closeButtonAdd.addEventListener('click', ()=>{
  closePopup(editFormAdd);
});
formElementAdd.addEventListener('submit', formSubmitAddHandler);
closeButtonImg.addEventListener('click', ()=>{
  closePopup(editFormImg);
});
