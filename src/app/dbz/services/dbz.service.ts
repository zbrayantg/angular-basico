import { Injectable } from "@angular/core";


import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    
    //Propiedades
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 9000
        }
      ];
    
    get personajes(): Personaje[] {
        return [...this._personajes];
    }


    //Constructor
    constructor() {}

    //Metodos
    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}