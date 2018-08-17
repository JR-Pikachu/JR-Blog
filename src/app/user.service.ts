import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface RegisterResponse {
  success: boolean;
}
interface LoginResponse {
  result: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _api = 'http://localhost:3000/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  };

  // TEMP login storage
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { }

  init() {
    console.log('service user ok');
  }


  // TEMP save userSession
  setUserSession(data) {
    console.log('setUserSession - save de user');
    console.log(data);
    this.setLoggedIn(true);
    localStorage.setItem('currentUser', JSON.stringify(data.user));
  }

  // TEMP login storage
  setLoggedIn(value: boolean) {
    console.log('setLoggedIn set to : ' + value);
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  // TEMP isLoggedIn - Vérifie si la session existe
  get isLoggedIn() {
    console.log('isLoggedIn');
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  // TEMP logOut - Supprime la session et le localStorage
  logOut() {
    console.log('Service log out');
    localStorage.clear();
  }



  // TEMP get user infos
  getUser(userDataSent) {
    console.log('getUser from service');
    return this.http.get<LoginResponse>(this._api + 'api/users/login', userDataSent);
  }

  // API call - For register - SAMPLE V2 avec User pour TOUT
  registerUser(userDataSent) {
    console.log('registerUser from user service');
    console.log(userDataSent);

    return this.http.post<RegisterResponse>(this._api + 'api/users/register', userDataSent,
    this.httpOptions);
  }

  // API call - For Login
  loginUser(userDataSent) {
    console.log('registerUser from user service');
    return this.http.post<LoginResponse>(this._api + 'api/users/login', userDataSent);
  }


  /*
  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username: username, password: password })
        .map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        });
  }
  */

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
