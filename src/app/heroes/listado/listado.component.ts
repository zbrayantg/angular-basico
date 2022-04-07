import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Ironman', 'Capitan America', 'Spiderman', 'Thor', 'Hulk', 'Batman'];
  heroeBorrado: string = '';

  borrarHeroe(index: number): void {
    const heroeBorrado = this.heroes.splice(index, 1) || '';
    this.heroeBorrado = heroeBorrado[0];
  }

}
