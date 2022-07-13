import { Component } from "@angular/core";
import { BaseLogger } from "../utility/logger";

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    logObj: BaseLogger;
    
    constructor(logger: BaseLogger) {
        this.logObj=logger
        this.logObj.log();
    }
}
