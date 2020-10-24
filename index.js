let editButton = document.querySelector('.profile__edit-button');

function editButtonHandler() {
  let editForm = document.querySelector('.edit-form');
  editForm.classList.remove('edit-form_display-none');
}

editButton.addEventListener('click', editButtonHandler);

let closeButton = document.querySelector('.edit-form__close-button');

function closeButtonHandler() {
  let editForm = document.querySelector('.edit-form');
  editForm.classList.add('edit-form_display-none');
}

closeButton.addEventListener('click', closeButtonHandler);

let formElement = document.querySelector('.edit-form__form');


function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.name-input');
    let jobInput = document.querySelector('.job-input');

    let nameProfile= document.querySelector('.profile__title');
    let jobProfile= document.querySelector('.profile__subtitle');

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closeButtonHandler();
}
formElement.addEventListener('submit', formSubmitHandler);
