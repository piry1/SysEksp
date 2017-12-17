import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BmrComponent } from './bmr/bmr.component';
import { DietComponent } from './diet/diet.component';
import { SportComponent } from './sport/sport.component';
import { SummaryComponent } from './summary/summary.component';
import { BmrResultsComponent } from './bmr/bmr-results/bmr-results.component';
import { DietResultsComponent } from './diet/diet-results/diet-results.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BmrComponent,
    DietComponent,
    SportComponent,
    SummaryComponent,
    BmrResultsComponent,
    DietResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
