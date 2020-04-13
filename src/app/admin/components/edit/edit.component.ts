import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'; 
import { environment } from '../../../../environments/environment';
import { AnimalClass } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

import { fadeLateral } from '../animations';

@Component({
  selector: 'adminEdit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.css'],
  providers: [UserService, AnimalService, UploadService],
  animations: [fadeLateral]
})
export class EditComponent implements OnInit{
  
  public animal: AnimalClass;

  public title: string;
  
  public identity: any;
  public token: string;
  public id: string;
  public url: string;
  public status: string;
  public message: string;
  public filesToUpload: Array<File>;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.title = 'Editar el animal';
    this.animal = new AnimalClass(null, '', '', 2017, '', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = environment.host.api;
  }

  ngOnInit() {
    this.getAnimal();
  }

  getAnimal(){
    this._route.params.forEach((params: Params) => {
      this.id = params['id'];

      this._animalService.getAnimal(this.id).subscribe(
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

  onSubmit() {
    console.log("Entrando en ...");


    this._animalService.editAnimal(this.token, this.id, this.animal).subscribe(
      res => {
        if(!res.animal) {

          this.status = "error";
          this.message = 'no se ha editado el animal1';

        }else{
          this.status = 'success';
          this.animal = res.animal;

          if(!this.filesToUpload){
            this._router.navigate(['/admin-panel']);
          } else {
            this._uploadService.makeFileRequest(
              this.url + 'upload-image-animal/' + this.animal._id,
              [],
              this.filesToUpload,
              this.token,
              'image'
            ).then( (result: any) => {
              this.animal.image = result.image;
              console.log(this.animal);
              this._router.navigate(['/admin-panel']);
            });
          }
        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          this.status = 'error';
          this.message = 'no se ha editado el animal';
        } 
      }
    );
    
    
  }
  
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
    let reader = new FileReader();

    reader.onload = function() {

      let port = document.getElementById("port");
      let image = document.getElementById("img");

      if(image != null) {
        port.removeChild(image);
      }

      let img = document.createElement("img");
      img.src = "" + reader.result + "";
      img.id = "img";
      img.className = "image";
      img.style.display = "block";
      img.style.width = "25%";
      img.style.margin = "0px auto";

      port.insertBefore(img, null);
    }

    reader.readAsDataURL(this.filesToUpload[0]);
  }

}
