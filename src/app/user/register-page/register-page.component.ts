import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { matchpassword } from './matchpassword.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  registerForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }, { validators:matchpassword });
  }

  onSubmit() {
    console.log(this.registerForm);
    this.http.post(`http://localhost:3000/api/user/register`, 
    this.registerForm.value).
    subscribe((response) => {
      console.log(response);
      //console.log(this.registerForm.value);
    });
    this.router.navigate(['user/login']);
  }
}