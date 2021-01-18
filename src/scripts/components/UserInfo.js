export default class UserInfo {
  constructor({ selectorUserName, selectorUserJob, selectorUserAvatar}) {
    this._profileUserName = document.querySelector(selectorUserName);
    this._profileUserJob = document.querySelector(selectorUserJob);
    this._profileUserAvatar = document.querySelector(selectorUserAvatar);
  }
  getUserInfo() {
    const user = {
      name: this._profileUserName.textContent,
      job: this._profileUserJob.textContent
    }
    return user;
  }
  saveUserId(id) {
    this._userId = id;
  }
  getUserId() {
    return this._userId;
  }
  setUserInfo({name, job}) {
    this._profileUserName.textContent = name;
    this._profileUserJob.textContent = job;
  }
  setUserAvatar(url) {
    this._profileUserAvatar.src = url;
    this._profileUserAvatar.alt = this._profileUserName.textContent;
  }
}
