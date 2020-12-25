export default class UserInfo {
  constructor({ selectorUserName, selectorUserJob}) {
    this._profileUserName = document.querySelector(selectorUserName);
    this._profileUserJob = document.querySelector(selectorUserJob);
  }
  getUserInfo() {
    const user = {
      name: this._profileUserName.textContent,
      job: this._profileUserJob.textContent
    }
    return user;
  }
  setUserInfo({name, job}) {
    this._profileUserName.textContent = name;
    this._profileUserJob.textContent = job;
  }
}
