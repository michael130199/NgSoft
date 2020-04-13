import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { UserClass } from 'src/app/models/user';
// import { GLOBAL } from './global'; //lo cambie por el environment
import { environment } from '../../../environments/environment';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {

  public title: string;
  public user: UserClass;
  public status: string;
  public message: any;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = "Registro";
    this.user = new UserClass('','','','','','ROLE_USER','');
  }

  ngOnInit() {
    console.log('Componente registro Cargado............');
    
  }

  onSubmit(registerForm){

    this._userService.register(this.user).subscribe(
      res => {

        if(res.user && res.user._id){

          this.status = 'success';
          this.user = new UserClass('','','','','','ROLE_USER','');
          registerForm.reset();

        }else{

          this.message = res.message;
          this.status = 'error';

        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
