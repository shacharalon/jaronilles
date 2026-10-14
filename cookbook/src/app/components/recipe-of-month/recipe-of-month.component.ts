import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { SITE_CONTENT } from 'src/app/data/site-content';
import { Recipe } from 'src/model/recipes';

@Component({
  selector: 'app-recipe-of-month',
  templateUrl: './recipe-of-month.component.html'
})
export class RecipeOfMonthComponent implements OnInit {
  config = SITE_CONTENT.recipeOfTheMonth;
  recipe?: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(data => {
      this.recipe =
        data.recipes.find(r => r.name === this.config.recipeName) ?? data.recipes[0];
    });
  }
}
