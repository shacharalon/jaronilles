import { Ingredient } from "./ingredients";

export class Recipe {
  name: string = '';
  image?: string;
  description: string = '';
  ingredients: Ingredient[] = [];
  servings: number = 0;     // people
  time: string = '';        // e.g. "30 min"
  instructions: string[] = [];
  category: string = '';    // "savory" | "dessert"
}