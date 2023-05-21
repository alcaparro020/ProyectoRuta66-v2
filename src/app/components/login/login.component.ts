import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string;
  password: string;

  emailValid: boolean = true;

  constructor(private sqlService: SQLserviceService, private router: Router) { }

  loginUserPhp(){
    const user = { email: this.email, password: this.password };
    if (this.validateForm()) {
      this.sqlService.loginUser(user).subscribe(data => {
        console.log(data);
        this.sqlService.setToken(data.id);
        this.router.navigate(["/home"]);
      });
    }
  }

  validateForm(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!this.email || !emailPattern.test(this.email)) {
      if (this.email=="admin") {
        this.emailValid = true;
      } else {
        this.emailValid = false;
        return false; // Email inválido o vacío
      }

    } else {
      this.emailValid = true;
    }

    return true; // Todos los campos han pasado las validaciones
  }
}
