import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/recipes.service';

import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;


  constructor(private recipesService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelectedRecipe() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }


}
