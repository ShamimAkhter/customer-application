import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SupplierRoutes } from "../routes/supplier-routes";
import { SupplierComponent } from "./supplier.component";


@NgModule({
    declarations: [
        SupplierComponent
    ],
    imports: [
        RouterModule.forChild(SupplierRoutes),
        CommonModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [SupplierComponent]
})
export class SupplierModule {

}