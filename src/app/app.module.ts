import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './views/home/home.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { DeckListComponent } from './views/deck-list/deck-list.component';
import { DeckEditComponent } from './views/deck-edit/deck-edit.component';
import { DeckQuoteListComponent } from './views/deck-quote-list/deck-quote-list.component';
import { DeckQuoteEditComponent } from './views/deck-quote-edit/deck-quote-edit.component';
import { QuoteListComponent } from './views/quote-list/quote-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    HomeComponent,
    CustomerListComponent,
    CustomerEditComponent,
    DeckListComponent,
    DeckEditComponent,
    DeckQuoteListComponent,
    DeckQuoteEditComponent,
    QuoteListComponent
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
