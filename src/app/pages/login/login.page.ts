import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  rememberUser: boolean = false;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'userName': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('home');
    }
  }

  login() {
    this.authService.login({ "username": this.loginForm.value.userName, "password": this.loginForm.value.password }).subscribe((res) => {
      if (res.token) {
        this.authService.setToken(res.token);
        this.loginForm.reset();
      }
      this.router.navigateByUrl('home');
    });
  }
}
