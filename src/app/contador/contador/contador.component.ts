import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(base)"> + {{base}}</button>
    <span>{{counter}}</span>
    <button (click)="acumular(-base)"> - {{base}}</button>  
        
    `
})
export class ContadorComponent {
    public title: string = 'Contador App';
    public counter: number = 10;

    base: number = 5;

    public acumular( valor:number ): void {
        this.counter += valor;
    }
}