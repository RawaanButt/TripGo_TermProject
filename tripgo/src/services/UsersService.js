import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UsersService extends GenericService {
  constructor() {
    super();
  }
  login = (Username, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { Username, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  register = (Username, password) =>
    this.post("users/register", { Username, password });
  logout = () => {
    localStorage.removeItem("token");
  };
  loggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
}
let userService = new UsersService();
export default userService;
