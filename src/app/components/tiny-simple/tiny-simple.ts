import { Component } from '@angular/core';


declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'tiny',
    templateUrl: './tiny-simple.html'   
})

// para exportar siempre debe tener la palabra class

export class TinyComponent {
    public titulo;
    
}