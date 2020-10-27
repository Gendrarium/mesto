let editForm = document.querySelector('.edit-form');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.edit-form__close-button');
let nameInput = document.querySelector('.edit-form__input_content_name');
let jobInput = document.querySelector('.edit-form__input_content_job');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

function editButtonHandler() {
  editForm.classList.add('edit-form_display-flex');

  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closeButtonHandler() {
  editForm.classList.remove('edit-form_display-flex');
}

let formElement = document.querySelector('.edit-form__form');

function formSubmitHandler (evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closeButtonHandler();
}

editButton.addEventListener('click', editButtonHandler);
closeButton.addEventListener('click', closeButtonHandler);
formElement.addEventListener('submit', formSubmitHandler);
