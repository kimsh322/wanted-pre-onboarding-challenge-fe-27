class AuthController {
  private storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  getToken() {
    return this.storage.getItem("token");
  }

  setToken(token: string) {
    return this.storage.setItem("token", token);
  }

  clear() {
    this.storage.clear();
  }
}

export const auth = new AuthController();
