import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {



  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }

}
