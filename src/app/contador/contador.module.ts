import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";


//Common module is to enable ngIf, ngFor, etc.
@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: []
})


export class ContadorModule { 

}