import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DeckingQuoteEditComponent } from './decking-quotes/decking-quote-edit/decking-quote-edit.component';
import { DqeCustomerComponent } from './decking-quotes/decking-quote-edit/dqe-customer/dqe-customer.component';
import { DqeEstimateComponent } from './decking-quotes/decking-quote-edit/dqe-estimate/dqe-estimate.component';
import { DqeMaterialOrderComponent } from './decking-quotes/decking-quote-edit/dqe-material-order/dqe-material-order.component';
import { DqeTakeoffComponent } from './decking-quotes/decking-quote-edit/dqe-takeoff/dqe-takeoff.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerQuotesListComponent } from './views/customer-quotes-list/customer-quotes-list.component';
import { HomeComponent } from './views/home/home.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

registerLocaleData(localeEn, 'en-US');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerListComponent,
    CustomerEditComponent,
    DeckingQuoteEditComponent,
    DqeCustomerComponent,
    DqeEstimateComponent,
    DqeMaterialOrderComponent,
    DqeTakeoffComponent,
    CustomerQuotesListComponent,
    LandingPageComponent,
    PhoneNumberPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask(),
    { provide: LOCALE_ID, useValue: 'en-US' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
