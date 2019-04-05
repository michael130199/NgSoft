import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'NgSoft';
  creator = 'Michael Urbina';
  emailContact: string;

  ngOnInit(){
    this.emailContact = localStorage.getItem('emailContacto');
    //console.log(localStorage.getItem('emailContacto'));
  }

  ngDoCheck(){
    //console.log('El DoCheck se ha ejecutado');
    this.emailContact = localStorage.getItem('emailContacto');
  }

  deleteEmail(){
    localStorage.removeItem('emailContact');//Borra Una variable en especifica
    localStorage.clear();//Borra todas las varibles del localStorage
    this.emailContact == null;
  }

}
