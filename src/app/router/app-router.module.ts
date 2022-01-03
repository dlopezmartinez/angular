import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { HomeComponent } from "../components/home/home.component";
import { RecipeDetailComponent } from "../components/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../components/recipes/recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "../components/recipes/recipe-list/recipe-list.component";
import { RecipeStartComponent } from "../components/recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "../components/recipes/recipes.component";
import { ShoppingEditComponent } from "../components/shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "../components/shopping-list/shopping-list.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    }, //home
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent }, //lo colocamos antes que el :id para que router se parsee bien la ruta.
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent },
            // { path: 'id:/item', component: RecipesComponent },
        ]
    }, //recetas
    {
        path: 'shoppinglist',
        component: ShoppingListComponent,
        children: [
            { path: ':id/edit', component: ShoppingEditComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }