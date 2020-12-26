export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this.name = data.name;
    this.link = data.link;
    this._cardClick = handleCardClick;
    this._selector = cardSelector;
  }

  _getTemplate() {
    const cardCopy = document.querySelector(this._selector).content.cloneNode(true);
    return cardCopy;
  }

  _fullSizeImage(){
    this._image.addEventListener('click',()=>{
      this._cardClick({name: this.name, link: this.link});
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

    this._image.src = this.link;
    this._image.alt = this.name;
    this._element.querySelector('.card__title').textContent = this.name;

    this._fullSizeImage();
    this._likeCard();
    this._delCard();

    return this._element;
  }
}


