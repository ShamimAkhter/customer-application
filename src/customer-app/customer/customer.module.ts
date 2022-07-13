import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomerRoutes } from "../routes/customer-routes";
import { GridComponent } from "../utility/grid.component";
import { CustomerComponent } from "./customer.component";


@NgModule({
    declarations: [
        CustomerComponent,
        GridComponent
    ],
    imports: [
        RouterModule.forChild(CustomerRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [CustomerComponent]
})
export class CustomerModule { }
