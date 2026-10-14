import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { SmartFactoryComponent } from './components/smart-factory/smart-factory.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { AiAndMeComponent } from './components/ai-and-me/ai-and-me.component';
import { RecipeOfMonthComponent } from './components/recipe-of-month/recipe-of-month.component';
import { HistoryComponent } from './components/history/history.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'profession', component: ProfessionComponent },
  { path: 'smart-factory', component: SmartFactoryComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'ai-and-me', component: AiAndMeComponent },
  { path: 'recipe-of-the-month', component: RecipeOfMonthComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
