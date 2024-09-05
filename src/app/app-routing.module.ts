import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerQuotesListComponent } from './customer/customer-quotes-list/customer-quotes-list.component';
import { DmoFootingsComponent } from './decking-material-orders/dmo-footings/dmo-footings.component';
import { DmoFrameComponent } from './decking-material-orders/dmo-frame/dmo-frame.component';
import { DeckingQuoteEditComponent } from './decking-quotes/decking-quote-edit/decking-quote-edit.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './materials/material.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent, pathMatch: 'full' },

  { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuardService] },
  { path: 'customers/new', component: CustomerEditComponent, canActivate: [AuthGuardService] },
  { path: 'customers/:id', component: CustomerEditComponent, canActivate: [AuthGuardService] },
  { path: 'customers/:id/quotes', component: CustomerQuotesListComponent, canActivate: [AuthGuardService] },

  // { path: 'customers/:customerId/quotes/new', component: DeckingQuoteEditComponent },
  { path: 'quotes/decking/new', component: DeckingQuoteEditComponent, canActivate: [AuthGuardService] },
  { path: 'quotes/decking/:quoteId', component: DeckingQuoteEditComponent, canActivate: [AuthGuardService] },

  { path: 'materials', component: MaterialComponent, canActivate: [AuthGuardService] },

  { path: 'material-orders/decking/footings', component: DmoFootingsComponent, canActivate: [AuthGuardService] },
  { path: 'material-orders/decking/frame', component: DmoFrameComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
