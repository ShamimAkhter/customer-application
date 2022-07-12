import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomerRoutes } from "../routes/customer-routes";
import { CustomerComponent } from "./customer.component";


@NgModule({
    declarations: [CustomerComponent],
    imports: [
        RouterModule.forChild(CustomerRoutes),
        CommonModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [CustomerComponent]
})
export class CustomerModule { }