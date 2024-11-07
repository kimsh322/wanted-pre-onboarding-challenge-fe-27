import { Token } from "../apis/todos";

class AuthController {
  private storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  getToken() {
    return this.storage.getItem("token");
  }

  setToken(token: Token) {
    return token ? this.storage.setItem("token", token) : null;
  }

  clear() {
    this.storage.clear();
  }
}

export const auth = new AuthController();
