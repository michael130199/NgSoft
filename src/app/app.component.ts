import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  
  public title: string;
  public creator: string;
  public identity: string;
  public url: string;

  constructor(
    private _userService: UserService,
    private _router: Router
  ){
    this.title = 'NgSoft';
    this.creator = 'Michael Urbina';
    this.url = environment.host.api;
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }

}
