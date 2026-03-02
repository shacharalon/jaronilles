import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/model/recipes';

declare var bootstrap: any;

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent {
  recipes: Recipe[] = [];
  selectedRecipe?: Recipe;
  currentServings: number = 0;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(data => {
      this.recipes = data.recipes.filter(r => r.category === 'dessert');
    });
  }

  openModal(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.currentServings = recipe.servings;
    const modalEl = document.getElementById('dessertModal');
    if (modalEl) {
      const modal = new (window as any).bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  changeServings(amount: number) {
    if (!this.selectedRecipe) return;
    const newServings = this.currentServings + amount;
    if (newServings < 1) return;
    this.currentServings = newServings;
  }

  getAdjustedAmount(original: number): number {
    if (!this.selectedRecipe) return original;
    return original * (this.currentServings / this.selectedRecipe.servings);
  }
}
