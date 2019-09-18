import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrarEmail',
  template: `
    <div class="form-inline mt-4" *ngIf="emailContact"> 
      <div class="form-group mb-2">      
      <h4 class="mr-2">{{title}}:</h4>  
      <strong class="mr-2">{{emailContact}}</strong>
      </div>
      <button class="btn btn-danger" (click)="deleteEmail()">Eliminar Email De Contacto</button>
    </div>
        
  `
})

export class MostrarEmailComponent implements DoCheck, OnInit{
  title = 'Mostrar Email';
  emailContact: string;

  ngOnInit(){
    this.emailContact = localStorage.getItem('emailContacto');
  }

  ngDoCheck(){
    this.emailContact = localStorage.getItem('emailContacto');
  }

  deleteEmail(){
    localStorage.removeItem('emailContact');//Borra Una variable en especifica
    localStorage.clear();//Borra todas las varibles del localStorage
    this.emailContact == null;
  }

}