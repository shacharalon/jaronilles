import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DessertsComponent } from './components/desserts/desserts.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'desserts', component: DessertsComponent },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
