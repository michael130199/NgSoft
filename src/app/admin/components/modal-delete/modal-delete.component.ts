import { Component, Input, Output, EventEmitter} from '@angular/core';
import { AnimalClass } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UserClass } from 'src/app/models/user';

@Component({
  selector: 'modal-delete',
  templateUrl: './modal-delete.component.html'
})

export class ModalDeleteComponent{
  @Input() animal: AnimalClass;
  public identity: UserClass;
  public token: string;
  @Output() newList: EventEmitter<string>;
  
  title = 'modal';

  constructor(
    private _animalService: AnimalService,
    private _userService: UserService
  ){
    this.animal = new AnimalClass(null, '', '', 2017, '', '', '');
    this.identity = this._userService.getIdentity();
    this.newList = new EventEmitter();
  }

  animalDelete(){
    let token = this._userService.getToken();
    let id = this.animal._id;

    this._animalService.deleteAnimal(token, id).subscribe(
      res => {
        if(!res.animal) {
          console.log('no se borro el animal');
        } else {
          this.updateList(this.animal);
        }
      },
      error => {
        console.log(error);
      }    
    );
  }

  updateList(animal){
    this.newList.emit(animal);
  }

}
