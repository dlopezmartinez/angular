import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(selRecipe: Recipe) {
    this.selectedRecipe.emit(selRecipe);
  }


}
