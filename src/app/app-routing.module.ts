import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { CustomerPoComponent } from './customer-po/customer-po.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SupplyCatalogComponent } from './catalog/catalog.component';
import { RequestForProposalComponent } from './request-for-proposal/request-for-proposal.component';
import { NotificationComponent } from './notification/notification.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ContractsComponent } from './contracts/contracts.component';
import { CreateInvoiceComponent } from "./createinvoice/createinvoice.component";
import { ViewRfqComponent } from './view-rfq/view-rfq.component';
import { mainviewComponent } from "./mainview/mainview.component";
import { MiddlebarComponent } from "./middlebar/middlebar.component";
import { GoodsReceiptComponent } from './goods-receipt/goods-receipt.component';
import { VendorsprofoComponent } from './vendorsprofo/vendorsprofo.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent} ,
  { path: 'register', component: RegistrationComponent },
  
  { path: 'customer', component: CustomerComponent, 
    children: [
      { path: 'request-for-proposal', component: RequestForProposalComponent },
      { path: 'customer-profile', component: CustomerProfileComponent },
      { path: 'notifications', component: NotificationComponent },
      { path: 'catalog', component: SupplyCatalogComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'purchase-orders', component: CustomerPoComponent }, 
      { path: 'contracts', component: ContractsComponent },
      {path: 'MainviewComponent', component:  mainviewComponent},
      { path: 'customer-profile', component: CustomerProfileComponent },

      

    ]
  },
  
  {
    path: 'vendor', component: VendorDashboardComponent, 
    children: [
      { path: 'purchase-orders', component: CustomerPoComponent }, 
      { path: 'create-invoice', component: CreateInvoiceComponent },
      { path: 'notifications', component: NotificationComponent },
      { path: 'catalog', component: SupplyCatalogComponent },
      { path: 'view-rfq', component: ViewRfqComponent },
      {path: 'middlebar', component:  MiddlebarComponent},
      { path: 'profile', component: CustomerProfileComponent },
      { path: 'goods-receipt', component: GoodsReceiptComponent },
      { path: 'contracts', component: ContractsComponent },
      {path: 'vendorsprofo', component:  VendorsprofoComponent},
      { path: 'proposal-list', component: ProposalListComponent },
      
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
