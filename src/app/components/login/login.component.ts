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

  constructor(private sqlService: SQLserviceService, private router: Router) { }

  loginUserPhp(){
    const user = { email: this.email, password: this.password };
    this.sqlService.loginUser(user).subscribe(data => {
      console.log(data);
      this.sqlService.setToken(data.id);
      this.router.navigate(["/home"]);
    });
  }

  login() {
    const user = { email: this.email, password: this.password };
    this.sqlService.login(user).subscribe(data => {
      this.sqlService.setToken(data.token);
      this.router.navigate(["/"]);
    });
  }
}
