import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { RecipeOfMonthComponent } from './components/recipe-of-month/recipe-of-month.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DessertsComponent } from './components/desserts/desserts.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'recipe-of-the-month', component: RecipeOfMonthComponent },
  { path: 'hobbies', component: HobbiesComponent },
  {
    path: 'cookbook',
    component: CookbookComponent,
    children: [
      { path: 'recipes', component: RecipesComponent },
      { path: 'desserts', component: DessertsComponent },
      { path: '', redirectTo: 'recipes', pathMatch: 'full' }
    ]
  },
  // old URLs keep working
  { path: 'recipes', redirectTo: 'cookbook/recipes' },
  { path: 'desserts', redirectTo: 'cookbook/desserts' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
