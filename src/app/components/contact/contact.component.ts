import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeIn]
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
