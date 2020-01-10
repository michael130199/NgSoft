import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css'],
  animations: [fadeIn]
})
export class KeepersComponent implements OnInit{
  title = 'Cuidadores';
  ngOnInit(){
      console.log('keepers.component Cargado');
  }
}
