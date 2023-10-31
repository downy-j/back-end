"use strict";

const { name } = require("ejs");
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, pw } = UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && pw === body.psword) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다" };
    }
    return { success: false, message: "존재하지 않는 아이디 입니다" };
  }
}

module.exports = User;