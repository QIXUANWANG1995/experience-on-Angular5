import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PageService} from "../../../services/page.service.client";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId : string;
  pages:any = [{}];
  name:string;
  description:string;
  webId:string;
  pId:string;
  constructor(private pageService : PageService, private activatedRoute:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pId = params['pid'];
        }
      );

    this.pages = this.pageService.findPageByWebsiteId(this.webId);
    var page:any =this.pageService.findPageById(this.pId);
    this.name=page.name;
    this.description = page.description;
  }

  update(){
    var temp:any = new Object();
    temp.name = this.name;
    temp.description = this.description;
    this.pageService.updatePage(this.pId,temp);
    this.router.navigate(['/user/' + this.userId+'/website/'+this.webId+'/page/']);
  }

  gotowid(i:string){
    this.router.navigate(['/user/' + this.userId+'/website/'+this.webId+'/page/'+this.pages[i]._id+'/widget']);
  }
  gotoedit(i:string){
    this.router.navigate(['/user/' + this.userId+'/website/'+this.webId+'/page/'+this.pages[i]._id]);
  }

  gotopro(){
    this.router.navigate(['/user/' + this.userId]);
  }

  gotoback(){
    this.router.navigate(['/user/' + this.userId+'/website/'+this.webId+'/page']);
  }
  gotonew(){
    this.router.navigate(['/user/' + this.userId+'/website/'+this.webId+'/page/'+'new']);
  }

  delete(){
    this.pageService.deletePage(this.pId)
    this.router.navigate(['/user/' + this.userId+'/website/'+this.webId+'/page']);
  }
}
