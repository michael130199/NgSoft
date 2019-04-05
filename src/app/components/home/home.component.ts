import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'Bienvenido a NgSoft';
  descrip = 'Disfruta de los animales mas exoticos de nuestro zoologico.';
  ngOnInit(){
      console.log('home.component Cargado');
      
  }
}


