import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebsiteService} from "../../../services/website.service.client";

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId : string;
  websites:any = [{}];
  name:string;
  description:string;
  constructor(private _websiteService : WebsiteService, private activatedRoute:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );

    this.websites = this._websiteService.findWebsitesByUser(this.userId);
  }

  newweb(){
    var temp:any = new Object();
    temp.name = this.name;
    temp.description = this.description;
    this._websiteService.createWebsite(this.userId,temp);
    this.router.navigate(['/user/' + this.userId+'/website']);
  }

  gotopage(i:string){
    this.router.navigate(['/user/' + this.userId+'/website/'+this.websites[i]._id+'/page']);
  }
  gotoedit(i:string){
    this.router.navigate(['/user/' + this.userId+'/website/'+this.websites[i]._id]);
  }

  gotopro(){
    this.router.navigate(['/user/' + this.userId]);
  }

  gotoback(){
    this.router.navigate(['/user/' + this.userId+'/website']);
  }

  gotonew(){
    this.router.navigate(['/user/' + this.userId+'/website'+'/new']);
  }
}
