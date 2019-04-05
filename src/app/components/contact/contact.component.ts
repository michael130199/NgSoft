import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  title = 'Contactos';
  emailContact: string;

  ngOnInit(){
    console.log('contact.component Cargado');
  }

  saveEmail(){
    localStorage.setItem('emailContacto', this.emailContact);
  }

}
