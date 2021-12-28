import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit, OnChanges {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.recipe);
  }

}
