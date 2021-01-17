export default class Card {
  constructor({data, userId, handleCardClick, handleLikeClick, handleDeleteClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._cardClick = handleCardClick;
    this._likeClick = handleLikeClick;
    this._deleteClick = handleDeleteClick;
    this._selector = cardSelector;
  }
  setLikes({likes}) {
    this._element.querySelector('.card__like-num').textContent = likes.length;
    const isLiked = this.isLiked(likes);
    console.log(this.isLiked(likes));
    if (isLiked) {
      this._likeButton.classList.add('card__like_fill');
    } else {
      this._likeButton.classList.remove('card__like_fill');
    }
  }
  isLiked(likes) {
    likes.some(function(item) {
      return item._id === 555;
  });
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
    this._likeButton = this._element.querySelector('.card__like');
    this._likeButton.addEventListener('click', () => {
      this._likeClick(this._cardId, this.isLiked());
    });
  }

  _delCard() {
    this._delButton = this._element.querySelector('.card__del');
    this._delButton.addEventListener('click', () => {
      this._deleteClick(this._cardId);
    });
  }
  remove() {
    this._delButton.closest('.card').remove();
  }
  _checkOwner() {
    if (this._ownerId === this._userId) {
      this._delButton.classList.remove('card__del_display-none');
        return true;
      } else {
        return false;
      }
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
    this.setLikes({likes: this._likes});
    this._checkOwner();

    return this._element;
  }
}


