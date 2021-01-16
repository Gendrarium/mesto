export default class Api {
  constructor(baseUrl, key) {
    this._baseUrl = baseUrl;
    this._key = key;
  }
  getUserData() {
    fetch(`${this._baseUrl}/v1/cohort-19/users/me`, {
      headers: {
        method: 'GET',
        authorization: `${this._key}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });

  }
  patchRefreshUserInfo() {
    fetch(`${this._baseUrl}/v1/cohort-19/cards`, {
      headers: {
        method: 'PATCH',
        authorization: `${this._key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Ты забыл вставить сюда код',
        about: 'и сюда'
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
  patchRefreshAvatar() {

  }
  getInitialCards() {
    fetch(`${this._baseUrl}/v1/cohort-19/cards`, {
      headers: {
        method: 'GET',
        authorization: `${this._key}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
  postAddCard() {
    fetch(`${this._baseUrl}/v1/cohort-19/cards`, {
      headers: {
        method: 'POST',
        authorization: `${this._key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Ты забыл вставить сюда код',
        link: 'и сюда'
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
  deleteCard() {

  }
  putLikeCard() {

  }
  dislikeCard() {

  }
}
