import { Component } from '@angular/core';

@Component({
  selector: 'adminList',
  templateUrl: './list.component.html'
})
export class ListComponent{
  title = 'Listado';
  numbers = new Array(25);
  //[0,1,2,3,4,5]
}
