import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './app/fondation/footer/footer.component';
import { NavbarComponent } from './app/fondation/navbar/navbar.component';
import { AboutComponent } from './app/content/about/about.component';
import { ServicesComponent } from './app/content/services/services.component';
import { PortfolioComponent } from './app/content/portfolio/portfolio.component';
import { ContactComponent } from './app/content/contact/contact.component';
import { HomeComponent } from './app/home/home.component';
import { MainComponent } from './app/main/main.component';
import { JournalComponent } from './app/content/journal/journal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    HomeComponent,
    MainComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
