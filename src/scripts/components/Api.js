export default class Api {
  constructor({url, key}) {
    this._url = url;
    this._key = key;
  }
  getUserData() {
    return fetch(`${this._url}/v1/cohort-19/users/me`, {
      headers: {
        method: 'GET',
        authorization: this._key
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });

  }
  editUserInfo(data) {
    return fetch(`${this._url}/v1/cohort-19/cards`, {
      headers: {
        method: 'PATCH',
        authorization: this._key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
  editAvatar(data) {
    return fetch(`${this._url}/v1/cohort-19/users/me/avatar`, {
      headers: {
        method: 'PATCH',
        authorization: this._key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
  getInitialCards() {
    return fetch(`${this._url}/v1/cohort-19/cards`, {
      headers: {
        method: 'GET',
        authorization: this._key
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
  addCard(data) {
    return fetch(`${this._url}/v1/cohort-19/cards`, {
      headers: {
        method: 'POST',
        authorization: this._key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
  deleteCard(id) {
    return fetch(`${this._url}/v1/cohort-19/cards/${id}`, {
      headers: {
        method: 'DELETE',
        authorization: this._key
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
  likeCard(id) {
    return fetch(`${this._url}/v1/cohort-19/cards/likes/${id}`, {
      headers: {
        method: 'PUT',
        authorization: this._key
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
  dislikeCard(id) {
    return fetch(`${this._url}/v1/cohort-19/cards/likes/${id}`, {
      headers: {
        method: 'DELETE',
        authorization: this._key
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      });
  }
}
