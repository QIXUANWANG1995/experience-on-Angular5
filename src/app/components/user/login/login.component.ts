import { Component, OnInit ,ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../../../services/user.service.client";
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  constructor(private userService: UserService,private router: Router) {

  }

  ngOnInit() {
  }

  login() {
// fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    var us = this.userService.findUserByUsername(this.username);
    if(us == null){
      this.errorFlag=true;
      return;
    }
    if(us.password != this.password){
      this.errorFlag=true;
      return;
    }
    this.errorFlag=false;
    this.router.navigate(['/user/' + us['_id']]);
  }

}
