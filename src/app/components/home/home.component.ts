import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn]
})
export class HomeComponent implements OnInit{
  title = 'Bienvenido a NgSoft';
  descrip = 'Disfruta de los animales mas exoticos de nuestro zoologico.';
  ngOnInit(){
      console.log('home.component Cargado');
      
  }
}


