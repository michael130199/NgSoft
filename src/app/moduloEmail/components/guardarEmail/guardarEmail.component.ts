import { Component } from '@angular/core';

@Component({
  selector: 'guardarEmail',
  template: ` 
    <div class="form-inline mt-2"> 
      <div class="form-group mb-2">
        <h4 class="mr-2">{{title}}:</h4>
        <input type="text" class="form-control mr-2" [(ngModel)]="emailContact" >
      </div>
      <button class="btn btn-success mb-2" (click)="saveEmail()">Guardar Email</button>
    </div>  
  `
})

export class GuardarEmailComponent {
  title = 'Guardar Email';
  emailContact: string;

  saveEmail(){
    localStorage.setItem('emailContacto', this.emailContact);
  }

}
