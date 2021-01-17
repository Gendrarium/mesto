export default class Card {
  constructor({data, userId, handleCardClick, handleLikeClick, handleDeleteClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._cardClick = handleCardClick;
    this._likeClick = handleLikeClick;
    this._deleteClick = handleDeleteClick;
    this._selector = cardSelector;
  }
  _isLiked() {
    this._likes.some((item) => {
      item._id = this._userId;
    })
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
      this._likeClick(likeButton, this._cardId, this._isLiked);
    });
  }

  _delCard(id) {
    const delButton = this._element.querySelector('.card__del');
    delButton.addEventListener('click', () => {
      this._deleteClick(this._cardId);
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
  setLikes(data) {
  }
}


