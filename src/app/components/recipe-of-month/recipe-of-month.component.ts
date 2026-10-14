import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';
import { LanguageService } from 'src/app/services/language.service';
import { Recipe } from 'src/model/recipes';

@Component({
  selector: 'app-recipe-of-month',
  templateUrl: './recipe-of-month.component.html'
})
export class RecipeOfMonthComponent implements OnInit, OnDestroy {
  recipe?: Recipe;
  private sub?: Subscription;

  constructor(
    private recipesService: RecipesService,
    private language: LanguageService
  ) {}

  get title() {
    return this.language.content.nav.recipe;
  }

  get config() {
    return this.language.content.recipeOfTheMonth;
  }

  get ui() {
    return this.language.content.ui;
  }

  ngOnInit() {
    // reload the recipe in the matching language whenever the language changes
    this.sub = this.language.lang$
      .pipe(switchMap(lang => this.recipesService.getRecipes(lang)))
      .subscribe(data => {
        this.recipe =
          data.recipes.find(r => r.name === this.config.recipeName) ?? data.recipes[0];
      });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
