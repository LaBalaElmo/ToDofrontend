import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "./services/register.service";
import {LoginService} from "../login/services/login.service";
import {Router} from "@angular/router";
import {StatusService} from "../../utils/card-status/services/status.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private registerService: RegisterService, private loginService: LoginService, private router: Router, private statusService: StatusService) {
  }
  onSubmit() {
    console.log(this.registerForm.value)
    this.registerService.register(this.registerForm.value.username!, this.registerForm.value.email!, this.registerForm.value.password!).subscribe(
      () => {
        this.loginService.login(this.registerForm.value.email!, this.registerForm.value.password!).subscribe(
          async () => {
            this.statusService.connectToStatus("2").subscribe()
            this.statusService.connectToStatus("3").subscribe()
            this.statusService.connectToStatus("4").subscribe(() => {
              this.router.navigate(['/home']).then(() => {})
            })
          }
        )
      }
    )
  }
}
