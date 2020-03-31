import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { UploadService } from 'src/app/services/upload.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService, UploadService]
})
export class UserEditComponent implements OnInit {
  public title: string;
  public user: User;
  public identity;
  public token;
  public status: string;
  public message: string;
  public filesToUpload: Array<File>;
  public url: string;
  

  constructor(
    private _userService: UserService,
    private _uploadService: UploadService
  ) { 
    this.title = 'Actualizar mis datos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = environment.host.api;
  }

  ngOnInit() {
    console.log('.........Componente user-edit Cargado.........');
  }

  onSubmit(){

    this._userService.updateUser(this.user).subscribe(
      res => {

        if(!res.user) {
          this.status = 'error';
          this.message = 'No se han actualizado los datos del usuario1';
        } else {
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));

          //subida de la imagen
          this._uploadService.makeFileRequest(
            this.url + 'upload-image-user/' + this.user._id,
            [],
            this.filesToUpload,
            this.token,
            'image'
          ).then( (result: any ) => {
            this.user.image = result.image;
            console.log(this.user);
            localStorage.setItem('identity', JSON.stringify(this.user));
          });


        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          this.status = 'error';
          this.message = 'No se han actualizado los datos del usuario';
        }
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
