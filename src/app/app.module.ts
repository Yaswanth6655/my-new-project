import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CustomerPoComponent } from './customer-po/customer-po.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SupplyCatalogComponent } from './catalog/catalog.component';
import { RequestForProposalComponent } from './request-for-proposal/request-for-proposal.component';
import { NotificationComponent } from './notification/notification.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ContractsComponent } from './contracts/contracts.component';
import { CreateInvoiceComponent } from './createinvoice/createinvoice.component';
import { ViewRfqComponent } from './view-rfq/view-rfq.component';
import { mainviewComponent } from './mainview/mainview.component';
import { MiddlebarComponent } from './middlebar/middlebar.component';
import { NgChartsModule } from 'ng2-charts';
import { GoodsReceiptComponent } from './goods-receipt/goods-receipt.component';
import { VendorsprofoComponent } from './vendorsprofo/vendorsprofo.component';
import { HttpClientModule } from '@angular/common/http';
import { ProposalListComponent } from './proposal-list/proposal-list.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    VendorDashboardComponent,
    CustomerPoComponent,
    InvoiceComponent,
    SupplyCatalogComponent,
    RequestForProposalComponent,
    NotificationComponent,
    RegistrationComponent,
    CustomerProfileComponent,
    ContractsComponent,
    CreateInvoiceComponent,
    ViewRfqComponent,
    mainviewComponent,
    MiddlebarComponent,
    GoodsReceiptComponent,
    VendorsprofoComponent,
    ProposalListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, NgChartsModule ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
