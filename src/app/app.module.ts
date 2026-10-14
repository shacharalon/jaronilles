import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { SmartFactoryComponent } from './components/smart-factory/smart-factory.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { AiAndMeComponent } from './components/ai-and-me/ai-and-me.component';
import { RecipeOfMonthComponent } from './components/recipe-of-month/recipe-of-month.component';
import { HistoryComponent } from './components/history/history.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProfessionComponent,
    SmartFactoryComponent,
    TechnologyComponent,
    AiAndMeComponent,
    RecipeOfMonthComponent,
    HistoryComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
