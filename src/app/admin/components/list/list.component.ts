import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalClass } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { fadeLateral } from '../animations';

@Component({
  selector: 'adminList',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AnimalService],
  animations: [ fadeLateral ]
})
export class ListComponent implements OnInit{

  public title: string;
  public numbers = new Array(10);
  public animals: Array<AnimalClass>;
  public status: string;
  public message: string;
  public animalDelete: AnimalClass;
  public searchInput: string;

  @Output() pasameLosDatos = new EventEmitter();
  //[0,1,2,3,4,5]

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
  ){
    this.title = 'Listado';
  }

  ngOnInit() {
    this.list();
  }

  list(){
    this._animalService.getAnimals().subscribe(
      res => {
        if(!res.animals) {
          this.status = "error";
          this.message = 'no se ha agregado el animal1';
        } else {
          this.status = 'success';
          this.animals = res.animals;
          console.log(this.animals);
        }      
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          this.status = 'error';
          this.message = 'no se ha agregado el animal';

        } 
      }
    );
  }

  open(animal){
    this.animalDelete = animal;
  }

  updateList(event){
    console.log(event);

    let i = this.animals.indexOf(event);

    if ( i !== -1 ) {
      this.searchInput = '';
      this.animalDelete = null;

      this.animals.splice( i, 1 );
    }

  }

}
