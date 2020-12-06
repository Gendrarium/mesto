export {Card};
import {openPopup} from './utils.js';

const editFormImg = document.querySelector('.edit-form_button_img');
const popupImage = editFormImg.querySelector('.edit-form__image');
const popupCaption = editFormImg.querySelector('.edit-form__caption');

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._selector = cardSelector;
  }

  _getTemplate() {
    const cardCopy = document.querySelector(this._selector).content.cloneNode(true);
    return cardCopy;
  }

  _fullSizeImage(){
    this._image.addEventListener('click',()=>{
      popupImage.src = this._image.src;
      popupCaption.textContent = this._image.alt;
      openPopup(editFormImg);
    })
  }

  _likeCard() {
    const likeButton = this._element.querySelector('.card__like');
    likeButton.addEventListener('click', () => {
     likeButton.classList.toggle('card__like_fill');
    });
  }

  _delCard() {
    const delButton = this._element.querySelector('.card__del');
    delButton.addEventListener('click', () => {
      delButton.closest('.card').remove();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.card__image');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    this._fullSizeImage();
    this._likeCard();
    this._delCard();

    return this._element;
  }
}


