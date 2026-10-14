import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from 'src/model/recipes';
import { Lang } from './language.service';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  constructor(private http: HttpClient) {}

  getRecipes(lang: Lang = 'de'): Observable<{ recipes: Recipe[] }> {
    const file = lang === 'en' ? 'assets/recipes.en.json' : 'assets/recipes.json';
    return this.http.get<{ recipes: Recipe[] }>(file);
  }
}
