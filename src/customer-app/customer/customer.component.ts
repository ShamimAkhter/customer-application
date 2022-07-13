import { Component, Injector } from "@angular/core";
import { Customer } from "./customer.model";
import { BaseLogger } from "../utility/logger";

@Component({
    templateUrl: './customer.component.html'
})
export class CustomerComponent {
    CustomerModel: Customer = new Customer();
    CustomerModels: Array<Customer> = new Array<Customer>();
    
    logObj: BaseLogger;
    
    constructor(logger: Injector) {
        this.logObj = logger.get("1");
        this.logObj.log();
    }
    
    selectCustomer(_selected:Object) {
        
        this.CustomerModel = _selected as Customer;
    }

    Add() {
        this.CustomerModels.push(this.CustomerModel);
        this.CustomerModel = new Customer();// clear UI
    }

    hasError(typeOfValidator: string, controlName: string): boolean {
        return this.CustomerModel
            .formCustomerGroup
            .controls[controlName]
            .hasError(typeOfValidator)
    }
}