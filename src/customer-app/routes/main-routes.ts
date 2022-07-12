import { CustomerComponent } from "../customer/customer.component";
import { CustomerModule } from "../customer/customer.module";
import { HomeComponent } from "../home/home.component";
import { CustomerRoutes } from "./customer-routes";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },

    // {
    //     path: 'Customer',
    //     loadChildren: '../customer/customer.module#CustomerModule'
    // },
    // {
    //     path: 'Supplier',
    //     loadChildren: '../supplier/supplier.module#SupplierModule'
    // },

    {
        path: 'Customer',
        loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule)
    },
    {
        path: 'Supplier',
        loadChildren: () => import('../supplier/supplier.module').then(m => m.SupplierModule)
    },

    // {
    //     path: 'Customer',
    //     // component: CustomerComponent,
    //     loadChildren: () => CustomerModule
    // },

    { path: '', component: HomeComponent },
];