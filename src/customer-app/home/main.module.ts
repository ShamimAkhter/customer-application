import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../routes/main-routes';
import { MasterPageComponent } from './master-page.component';
import { HomeComponent } from './home.component';
import { DbLogger, BaseLogger, ConsoleLogger, FileLogger } from '../utility/logger';

var providersCollection:Provider[] = [];
providersCollection.push({ provide: BaseLogger, useClass: ConsoleLogger });
providersCollection.push({ provide: "1", useClass: DbLogger });
providersCollection.push({ provide: "2", useClass: ConsoleLogger });

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
  providers: providersCollection,
  //   { // centralized dependency
  //     provide: BaseLogger,
  //     useClass: ConsoleLogger
  //   },
  //   { // conditional dependency
  //     provide: "1", useClass: DbLogger
  //   },
  //   {
  //     provide: "2", useClass: ConsoleLogger
  //   },
  //   {
  //     provide: "3", useClass: FileLogger
  //   }
  // ],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }


