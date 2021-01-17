export default class Api {
  constructor({url, key}) {
    this._url = url;
    this._key = key;
  }
  getUserData() {
    return fetch(`${this._url}/v1/cohort-19/users/me`, {
      method: 'GET',
      headers: {
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
    return fetch(`${this._url}/v1/cohort-19/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job
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
      method: 'PATCH',
      headers: {
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
      method: 'GET',
      headers: {
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
      method: 'POST',
      headers: {
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
      method: 'DELETE',
      headers: {
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
      method: 'PUT',
      headers: {
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
      method: 'DELETE',
      headers: {
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
