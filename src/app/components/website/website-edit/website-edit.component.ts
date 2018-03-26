import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {WebsiteService} from "../../../services/website.service.client";
@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId : string;
  websites:any = [{}];
  name:string;
  description:string;
  webId:string;
  constructor(private _websiteService : WebsiteService, private activatedRoute:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
        }
      );

    this.websites = this._websiteService.findWebsitesByUser(this.userId);
    var web:any =this._websiteService.findWebsiteById(this.webId);
    this.name=web.name;
    this.description = web.description;
  }

  update(){
    var temp:any = new Object();
    temp.name = this.name;
    temp.description = this.description;
    this._websiteService.updateWebsite(this.webId,temp);
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

  delete(){
    this._websiteService.deleteWebsite(this.webId);
    this.router.navigate(['/user/' + this.userId+'/website']);
  }
}
