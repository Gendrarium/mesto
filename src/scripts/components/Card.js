export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardClick = handleCardClick;
    this._selector = cardSelector;
  }

  _getTemplate() {
    const cardCopy = document.querySelector(this._selector).content.cloneNode(true);
    return cardCopy;
  }

  _fullSizeImage(){
    this._image.addEventListener('click',()=>{
      this._cardClick({name: this._name, link: this._link});
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


