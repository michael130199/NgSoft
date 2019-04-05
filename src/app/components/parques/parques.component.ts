import { Component, Input, Output, EventEmitter, 
    OnChanges, SimpleChanges, OnInit, 
    DoCheck, OnDestroy} from '@angular/core';


@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']   
})

// para exportar siempre debe tener la palabra class

export class ParquesComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
    @Input() nombre: string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;
    @Output() pasameLosDatos = new EventEmitter();

/* EventEmitter = Crear un evento para asignarselo a una 
    propiedad de la etiqueta correspondiente (parques), 
    se usa la directiva con el nombre (pasameLosDatos) */
    
    constructor(){
        this.nombre = 'Parque NC';
        this.metros = 400;
        this.vegetacion = 'Media';
        this.abierto = true;
    }
//Hook: Son eventos de ciclos de vida de los componentes

/* Para usar cualquier hook hay que importar la libreria 
    en el componente correspondiente e implementarlo en la 
    clase de dicho componente */

/* OnChanges: es un evento que se activa cuando uno o varios 
    datos son cambiados en el componente  */
    ngOnChanges(changes: SimpleChanges){
        // console.log(changes);
        console.log("Existen Cambios en las propiedades");        
    }

/*  OnInit: Es un evento que se activa cuando 
    se inicia un componente*/
    ngOnInit(){
        console.log("metodo Cargado");
    }

/* */
    ngDoCheck(){
        console.log("El DoCheck se a ejecutado");
    }

    ngOnDestroy(){
        console.log("Se va eliminar el componente");
    }
    
    emitirEvento(){
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': "Samir",
            'abierto': this.abierto
        })
    }
}