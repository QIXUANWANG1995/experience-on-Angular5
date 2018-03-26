import { Component, OnInit ,ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../../../services/user.service.client";
import {Router,ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

//properties
  userId: string;
  user :any;
  username: string;
  email:string;
  firstname:string;
  lastname:string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,private  router:Router) { }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        });
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
    this.email = this.user['email'];
    this.firstname = this.user['firstName'];
    this.lastname = this.user['lastName'];
  }
  update(){
    var temp:any = new Object();
    temp.username = this.username;
    temp.firstName = this.firstname;
    temp.lastName = this.lastname;
    this.userService.updateUser(this.userId,temp);
    this.router.navigate(['/user/' + this.userId]);
  }

  gotoweb(){
    this.router.navigate(['/user/' + this.userId+'/website']);
  }
  gotopro(){
    this.router.navigate(['/user/' + this.userId]);
  }
}
