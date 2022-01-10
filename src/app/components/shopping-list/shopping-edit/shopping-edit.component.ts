import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,

} from '@angular/core';

import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  edittedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe((index) => {
        this.edittedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      });
  }

  onAddItem(form: NgForm) {

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.slService.updateIngredient(this.edittedItemIndex, newIngredient);
      this.editMode = false;
      this.slForm.reset();
    } else {
      this.slService.addIngredient(newIngredient);
      this.slForm.reset();
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
