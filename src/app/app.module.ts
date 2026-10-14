import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { RecipeOfMonthComponent } from './components/recipe-of-month/recipe-of-month.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    DessertsComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TechnologyComponent,
    RecipeOfMonthComponent,
    HobbiesComponent,
    CookbookComponent
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
