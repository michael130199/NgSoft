import { Component } from '@angular/core';

@Component({
  selector: 'mainEmail',
  template: `

    <div class="card">
      <h2 class="card-header">{{title}}</h2>
      <div class="card-body">
        <guardarEmail></guardarEmail>
        <mostrarEmail></mostrarEmail>
      </div>
    </div>

    
    
  `
})

export class MainEmailComponent{
  title = 'Modulo de Email';


}
