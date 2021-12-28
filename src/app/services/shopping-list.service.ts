import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "../shared/recipe.model";
import { RecipeService } from "./recipes.service";
@Injectable()
export class ShoppingListService implements OnInit {

    constructor(private rService: RecipeService) { }

    private ingredients: Ingredient[] = [];


    shoppingList: Ingredient[];
    addedIngredient = new EventEmitter<Ingredient[]>();

    ngOnInit(): void {
        this.rService.recipeSelected.subscribe((recipe: Recipe) => {
            console.log(recipe);
            this.ingredients = recipe.ingredients;
        })
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.addedIngredient.emit(this.ingredients);
    }

}