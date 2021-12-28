import { Component, OnChanges, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipes.service';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  selRecipe: Recipe;

  constructor(private recipesService: RecipeService) { }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selRecipe = recipe;
      }
    )
  }

  changeSelectedRecipe(recipe: Recipe) {
    console.log(recipe);
    this.selRecipe = recipe;

  }


}
