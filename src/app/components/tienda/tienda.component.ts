import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']   
})

// para exportar siempre debe tener la palabra class

export class TiendaComponent implements OnInit{
    public titulo;
    public NombreParque: string;
    public miParque;

    constructor(){
        this.titulo = 'Esta es la tienda';
    }

    ngOnInit(){
        $('#botonjq').click(function(){
            console.log('Click desde');
            $('#textojq').removeClass('d-none').slideToggle();
        });
        
        $('#caja').dotdotdot({});
    }

    mostrarNombre(){
        console.log(this.NombreParque);
    }

    datosParques(event){
        this.miParque = event;
        console.log(this.miParque);
    }
}