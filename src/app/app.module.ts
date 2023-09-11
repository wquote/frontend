import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { DeckQuoteEditComponent } from './views/deck-quote-edit/deck-quote-edit.component';
import { DqeCustomerComponent } from './views/deck-quote-edit/dqe-customer/dqe-customer.component';
import { DqeEstimateComponent } from './views/deck-quote-edit/dqe-estimate/dqe-estimate.component';
import { DqeOrderComponent } from './views/deck-quote-edit/dqe-order/dqe-order.component';
import { DqeTakeoffComponent } from './views/deck-quote-edit/dqe-takeoff/dqe-takeoff.component';
import { CustomerQuotesListComponent } from './views/customer-quotes-list/customer-quotes-list.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerListComponent,
    CustomerEditComponent,
    DeckQuoteEditComponent,
    DqeCustomerComponent,
    DqeEstimateComponent,
    DqeOrderComponent,
    DqeTakeoffComponent,
    CustomerQuotesListComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
