import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';


interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-log-in',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styles: ``
})
export default class LogInComponent {
    form: FormGroup<LoginForm>;

    constructor(
      private _authService: AuthService,
      private _formBuilder: FormBuilder,
      private _router: Router
    ) {
      this.form = this._formBuilder.group<LoginForm>({
        email: this._formBuilder.nonNullable.control('', [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        ]),
        password: this._formBuilder.nonNullable.control('', [
          Validators.required,
          Validators.minLength(8)
        ]),
      });
    }

    onSubmit() {
      console.log(this.form.value);
      if(this.form.valid) {
        const { email, password } = this.form.getRawValue();
        this._authService.signUp(email, password).subscribe({
          next: () => {
            this._router.navigateByUrl('/dashboard');
          },
          error: (error) => {
            console.error(error);
          }
        })  ;
      }
    }
}
