import { CommonModule, registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { DeckingQuoteEditComponent } from './decking-quotes/decking-quote-edit/decking-quote-edit.component';
import { DqeCustomerComponent } from './decking-quotes/decking-quote-edit/dqe-customer/dqe-customer.component';
import { DqeEstimateComponent } from './decking-quotes/decking-quote-edit/dqe-estimate/dqe-estimate.component';
import { DqeMaterialOrderComponent } from './decking-quotes/decking-quote-edit/dqe-material-order/dqe-material-order.component';
import { DqeTakeOffComponent } from './decking-quotes/decking-quote-edit/dqe-take-off/dqe-take-off.component';
import { PhoneNumberPipe } from './shared/pipes/phone-number.pipe';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerQuotesListComponent } from './customer/customer-quotes-list/customer-quotes-list.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DqeTakeOffLayoutComponent } from './decking-quotes/decking-quote-edit/dqe-take-off/dqe-take-off-layout/dqe-take-off-layout.component';

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
        DqeTakeOffComponent,
        CustomerQuotesListComponent,
        LandingPageComponent,
        PhoneNumberPipe,
        DqeTakeOffLayoutComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgxMaskDirective
    ],
    providers: [
        provideNgxMask(),
        { provide: LOCALE_ID, useValue: 'en-US' },
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
export class AppModule { }
