import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page-test',
  templateUrl: './login-page-test.component.html',
  styleUrls: ['./login-page-test.component.scss']
})
export class LoginPageTestComponent {
  loginForm: FormGroup;

  constructor(private http: HttpClient) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
  //localhost:3000/api/users/login

  onSubmit() {
    console.log(this.loginForm);
    this.http.post('http://localhost:3000/api/user/login', 
    this.loginForm.value).
    subscribe((response) => {
      console.log(response);
    });
  }
}
