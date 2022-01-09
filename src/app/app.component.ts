import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  forbiddenProjectsName = ['Test'];
  projectStatus = ['Stable', 'Critical', 'Finished'];


  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], this.forbiddenNamesAsync.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null, Validators.required)
    })



  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectsName.includes(control.value)) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }

  forbiddenNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {

        if (this.forbiddenProjectsName.includes(control.value))
          resolve({ 'nameIsForbidden': true });

        resolve(null);
      }, 1500)
    })
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

}
