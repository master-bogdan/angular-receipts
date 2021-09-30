import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '@models/ingredient.model';
import { Recipe } from '@models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shrimp salad',
      'Very tasty shrimp salad',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Shrimps', 10),
        new Ingredient('Salad', 1),
      ],
    ),
    new Recipe(
      'Test recipe 2',
      'Some some descr 2',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
