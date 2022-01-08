import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Mono', 'Malo'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [this.forbiddenNames.bind(this), Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getHobbiesControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls
  }
  //{ [s: string]: boolean } ésto es una forma de con TS crear un objecto de clave-valor admitido por JS donde obligas a que la key sea de tipo string
  forbiddenNames(control: FormControl): { [s: string]: boolean } {

    if (this.forbiddenUsernames.includes(control.value)) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }

}
