import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styles: ``
})
export default class SignUpComponent {
  form;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group<LoginForm>({
      email: this._formBuilder.nonNullable.control('', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: this._formBuilder.nonNullable.control('', [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit() {
console.log(this.form.value);
  }
}
