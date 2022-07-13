import { Component } from "@angular/core";
import { Customer } from "./customer.model";

@Component({
    templateUrl: './customer.component.html'
})
export class CustomerComponent {
    CustomerModel: Customer = new Customer();
    CustomerModels: Array<Customer> = new Array<Customer>();
    
    Add() {
        this.CustomerModels.push(this.CustomerModel);
        this.CustomerModel = new Customer();// clear UI
    }
    
    hasError(typeOfValidator:string, controlName:string) : boolean {
        return this.CustomerModel
            .formCustomerGroup
            .controls[controlName]
            .hasError(typeOfValidator)
    }
}