
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "../shared/recipe.model";
import { ShoppingListService } from "./shopping-list.service";
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private schnitzel: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/2017-05-28_Wiener_Schnitzel_mit_Pommes_frites_anagoria.jpg/1280px-2017-05-28_Wiener_Schnitzel_mit_Pommes_frites_anagoria.jpg'

    private burguer: string = 'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts='

    private recipes: Recipe[] = [
        new Recipe('Schnitzel',
            'Wtf is this',
            this.schnitzel,
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Burguer',
            'Tasty tasty burguer',
            this.burguer,
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])];



    getRecipes() {
        return this.recipes.slice(); //devuelve una copia del array ya que JS trabaja siempre con referencias.
    }
}