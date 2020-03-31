import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User, UserClass} from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public title: string;
  public user: UserClass;
  public identity: UserClass;
  public token: string;
  public status: string;
  public message: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = "Login";
    this.user = new UserClass('','','','','','','');
  }

  ngOnInit() {
    console.log('Componente login Cargado.........');
  }

  onSubmit(loginForm){

    //Conseguir el Objeto del usuario
    this._userService.signup(this.user).subscribe(
      res => {

        this.identity = res.user;

        if( !this.identity && !res.user._id ) {
          alert("no se han traido los datos");
          this.message = res.message;
        } else {
          //Guardar el objeto del usuario en el localStorage
          localStorage.setItem('identity', JSON.stringify(this.identity));
          
          //Conseguir el token
          this._userService.signup(this.user, true).subscribe(
            res => {

              if ( res.token.length <= 0) {
                alert('El token no ha sido generado');
                this.message = res.message;
              }else{ 
                this.token = res.token;
                this.status = 'success';

                //Guardar el token en el localStorage
                localStorage.setItem('token', this.token);

                this._router.navigate(['/']);
              }

            },
            error => {
              console.log(error);
            }

          );

        }

      },
      error => {
        var errorMessage = <any>error; 
        
        if(errorMessage != null){
          var body = JSON.stringify(error._body);
          this.message = 'No te has identificado correctamente';
          this.status = 'error';
        }
      }

    );
  }

}
