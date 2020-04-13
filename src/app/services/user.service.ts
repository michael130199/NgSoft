import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { GLOBAL } from './global'; //lo cambie por el environment
import { environment } from '../../environments/environment';


@Injectable()

export class UserService {

  public url: string;
  public identity;
  public token;

  
  constructor(private _http: HttpClient) {
    this.url = environment.host.api;
  }

  register(user): Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this._http.post(
      this.url + 'register', 
      params, 
      {headers: headers}
    );
  }


  signup(user, getToken = null): Observable<any>{

    if(getToken != null){
      user.getToken = getToken;
    }

    let params = JSON.stringify(user);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this._http.post(this.url+'login', 
      params,
      {headers: headers}
    );
  }


  getIdentity(){
    
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity != "undefined"){
      this.identity = identity;
    }else {
      this.identity = null;
    }
  
    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');

    if(token != "undefined"){
      this.token = token;
    } else {
      this.token = null
    }

    return this.token;
  }

  updateUser(user): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    return this._http.put(
      this.url + 'update-user/' + user._id, 
      params, 
      {headers: headers}
    );

  }

  getKeepers(): Observable<any>{
    return this._http.get(this.url + 'keepers');
}

}
