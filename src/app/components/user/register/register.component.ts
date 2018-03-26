import { Component, OnInit ,ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../../../services/user.service.client";
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('r') registerForm: NgForm;

  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Username exsit!';
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }
  register() {
// fetching data from registerForm
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    var us = this.userService.findUserByUsername(this.username);
    if(us != null){
      this.errorFlag=true;
      return;
    }
    this.errorFlag=false;
    var nus:any = new Object();
    nus.username = this.username;
    nus.password = this.password;
    nus.firstName = 'N/A';
    nus.lastName = 'N/A';
    console.log(this.userService.createUser(nus));
    this.router.navigate(['/user/' + nus['_id']]);
  }
}
