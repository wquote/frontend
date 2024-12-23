import { CommonModule, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/token.interceptor';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerQuotesListComponent } from './customer/customer-quotes-list/customer-quotes-list.component';
import { DmoFootingsComponent } from './decking-material-orders/dmo-footings/dmo-footings.component';
import { DmoFrameComponent } from './decking-material-orders/dmo-frame/dmo-frame.component';
import { DmoGalvanizedComponent } from './decking-material-orders/dmo-galvanized/dmo-galvanized.component';
import { DmoCrudComponent } from './decking-material-orders/shared/dmo-crud/dmo-crud.component';
import { DeckingQuoteEditComponent } from './decking-quotes/decking-quote-edit/decking-quote-edit.component';
import { DqeCustomerComponent } from './decking-quotes/decking-quote-edit/dqe-customer/dqe-customer.component';
import { DqeEstimateComponent } from './decking-quotes/decking-quote-edit/dqe-estimate/dqe-estimate.component';
import { DqeMaterialOrderComponent } from './decking-quotes/decking-quote-edit/dqe-material-order/dqe-material-order.component';
import { DqeTakeOffLayoutComponent } from './decking-quotes/decking-quote-edit/dqe-take-off/dqe-take-off-layout/dqe-take-off-layout.component';
import { DqeTakeOffComponent } from './decking-quotes/decking-quote-edit/dqe-take-off/dqe-take-off.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './materials/material.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListComponent } from './shared/item-list-crud/item-list-crud.component';
import { PhoneNumberPipe } from './shared/pipes/phone-number.pipe';

registerLocaleData(localeEn, 'en-US');

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        CustomerListComponent,
        CustomerEditComponent,
        CustomerQuotesListComponent,
        DeckingQuoteEditComponent,
        DqeCustomerComponent,
        DqeEstimateComponent,
        DqeMaterialOrderComponent,
        DqeTakeOffComponent,
        DqeTakeOffLayoutComponent,
        LandingPageComponent,
        ListComponent,
        MaterialComponent,
        PhoneNumberPipe,
        LoginComponent,
        DmoCrudComponent,
        DmoFootingsComponent,
        DmoFrameComponent,
        DmoGalvanizedComponent,
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
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }

    ]
})
export class AppModule { }
