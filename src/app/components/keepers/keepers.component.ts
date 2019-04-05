import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css']
})
export class KeepersComponent implements OnInit{
  title = 'Cuidadores';
  ngOnInit(){
      console.log('keepers.component Cargado');
  }
}
