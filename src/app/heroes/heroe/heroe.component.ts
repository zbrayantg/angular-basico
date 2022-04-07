import { Component } from '@angular/core';



@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreMayusculas(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad} años`;
    }

    cambiarNombre(): void {
        this.nombre = 'Capitan America';
    }

    cambiarEdad(): void {
        this.edad = Math.trunc(Math.random() * 100)
    }
}