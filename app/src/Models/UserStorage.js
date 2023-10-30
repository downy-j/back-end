"use strict";

class UserStorage {
  static #users = {
    id: ["downy", "jerry", "terry"],
    pw: ["2468", "1357, '1234"],
    name: ["다우니", "제리", "테리"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }
}

module.exports = UserStorage;
