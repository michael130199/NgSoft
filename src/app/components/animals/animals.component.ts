import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit{
  title = 'animales';

  ngOnInit(){
      console.log('animals.component Cargado');
  }
}
