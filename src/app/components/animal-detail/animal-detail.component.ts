import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { environment } from '../../../environments/environment';
import { AnimalClass } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
  providers: [AnimalService, UserService]
})
export class AnimalDetailComponent implements OnInit{

  public title: string;
  public animal?: AnimalClass;
  public role: string;


  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
    private _userService: UserService,
    private _location: Location
  ){
    this.title = 'Detalles Del Animal';
    this.url = environment.host.api;
  }

  ngOnInit() {
    this.getAnimal();
    this.getData();
  }

  getAnimal(){
      this._route.params.forEach((params: Params) => {
        let id = params['id'];

        this._animalService.getAnimal(id).subscribe(
            res => {
              if(!res.animal) {
                this._router.navigate(['/']);
              } else {
                this.animal = res.animal;
              }      
            },
            error => {
              var errorMessage = <any>error;
              this._router.navigate(['/']);
      
              if(errorMessage != null){
                console.log(errorMessage);
              } 
            }
          );
      });
  }

  getData(){
    let identity = this._userService.getIdentity();

    if(!identity) {
        this.role = 'ROLE_USER';
    } else {
        this.role = identity.role;
    }

  }

  returnLastPage(){
    this._location.back();
  }

}
