import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe(
      () => {
        this.router.navigate(['/home']).then(() => {})
      }
    )
  }

  goToRegister() {
    this.router.navigate(['/register']).then(() => {})
  }
}
