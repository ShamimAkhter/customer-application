import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../routes/main-routes';
import { MasterPageComponent } from './master-page.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
