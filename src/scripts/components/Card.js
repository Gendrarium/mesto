export default class Card {
  constructor({data, userId, handleCardClick, handleLikeClick, handleDeleteClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._userId = userId;
    this._cardClick = handleCardClick;
    this._likeClick = handleLikeClick;
    this._deleteClick = handleDeleteClick;
    this._selector = cardSelector;
    this._isLiked = this._isLiked.bind(this);
  }
  setLikes({likes}) {
    this._likesNum.textContent = likes.length;
    this._likes = likes;
    if (this._isLiked()) {
      this._likeButton.classList.add('card__like_fill');
    } else {
      this._likeButton.classList.remove('card__like_fill');
    }
  }
  _isLiked() {
    return this._likes.some((item) => {
      if (item._id === this._userId) {
        return true;
      }
      return false;
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
    this._likeButton.addEventListener('click', () => {
      this._likeClick(this._cardId, this._isLiked());
    });
  }

  _delCard() {
    const delButton = this._element.querySelector('.card__del');
    delButton.addEventListener('click', () => {
      this._deleteClick(this._cardId);
    });
  }
  remove() {
    this._delButton.closest('.card').remove();
  }
  _checkOwner() {
    if (this._ownerId === this._userId) {
      this._delButton.classList.remove('card__del_display-none');
      }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.card__image');
    this._likesNum = this._element.querySelector('.card__like-num');
    this._likeButton = this._element.querySelector('.card__like');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    this._fullSizeImage();
    this._likeCard();
    this._delCard();
    this.setLikes({likes: this._likes});
    this._checkOwner();

    return this._element;
  }
}


