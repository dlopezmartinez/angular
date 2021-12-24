import { Component, OnChanges, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  changeSelectedRecipe(recipe: Recipe) {
    console.log(recipe);
    this.selRecipe = recipe;

  }


}
