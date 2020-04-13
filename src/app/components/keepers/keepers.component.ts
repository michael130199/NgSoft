import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';
import { UserClass } from '../../models/user';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css'],
  animations: [fadeIn],
  providers: [UserService]
})
export class KeepersComponent implements OnInit{

  public title: string;
  public keepers: UserClass;
  public url: string;

  constructor(
    private _userService: UserService
  ) {
    this.title  = 'Cuidadores';
    this.url = environment.host.api;
    this.getKeepers();
  }

  ngOnInit(){
      console.log('keepers.component Cargado');
  }

  getKeepers(){
    this._userService.getKeepers().subscribe(
      res => {

        if(!res.keepers) {

        } else {
          this.keepers = res.keepers;
        }

      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){

        } 
      }
    );
  }

}
