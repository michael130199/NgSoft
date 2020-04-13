import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalClass } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';
import { environment } from '../../../environments/environment'
import { fadeIn } from '../animations';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [fadeIn],
  providers: [AnimalService]
})
export class AnimalsComponent implements OnInit{

  public title: string;
  public url: string;
  public animals: AnimalClass;

  constructor(
    private _animalService: AnimalService,
    private _router: Router
  ){
    this.title = 'Animales';
    this.url = environment.host.api;
    this.getAnimals();
  }

  ngOnInit(){
      console.log('animals.component Cargado');
  }

  getAnimals(){
    this._animalService.getAnimals().subscribe(
      res => {
        if(!res.animals) {

        } else {
          this.animals = res.animals;
          console.log(this.animals);
        }      
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){

        } 
      }
    );
  }

  routerAnimal(id){
    this._router.navigate(['/animal', id]);
  }

}
