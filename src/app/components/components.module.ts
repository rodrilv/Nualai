import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { BackButtonComponent } from "./back-button/back-button.component";
@NgModule({
    declarations:[BackButtonComponent],
    imports:[IonicModule, CommonModule],
    exports:[BackButtonComponent]
})
export class ComponentsModule {
    
}