import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { environment } from '../../../../environments/environment';
import { AnimalClass } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { fadeLateral } from '../animations';

@Component({
  selector: 'adminAdd',
  templateUrl: './add.component.html',
  styleUrls:  ['../add/add.component.css'],
  providers: [UserService, AnimalService, UploadService],
  animations: [fadeLateral]
})
export class AddComponent{
  
  public title: string;
  public animal: AnimalClass;
  public identity: any;
  public token: string;
  public url: string;
  public status: string;
  public message: string;
  public filesToUpload: Array<File>;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.title = 'Agregar un animal';
    this.animal = new AnimalClass(null, '', '', 2017, '', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = environment.host.api;
  }

  onSubmit() {

    this._animalService.addAnimal(this.token, this.animal).subscribe(
      res => {
        if(!res.animal) {
          this.status = "error";
          this.message = 'no se ha agregado el animal1';

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
          this.message = 'no se ha agregado el animal';
        } 
      }
    );

    console.log("datos enviados");

  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;

    let reader = new FileReader();

    reader.onload = function(theFile: Event) {

      let port = document.getElementById("port");
      let image = document.getElementById("img");

      if(image != null) {
        port.removeChild(image);
      }

      let img = document.createElement("img");
      img.src = "" + reader.result;
      img.id = "img";
      img.className = "image";
      img.style.display = "block";
      img.style.width = "25%";
      img.style.margin = "0px auto";

      port.insertBefore(img, null);
    }

    reader.readAsDataURL(this.filesToUpload[0]);
    console.log(this.filesToUpload);
  
  }

}