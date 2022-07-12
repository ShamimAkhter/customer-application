import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './master-page/master-page.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './customer-app-main-routes';

@NgModule({
  declarations: [
    MasterPageComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerAppModule { }
