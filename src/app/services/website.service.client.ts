import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

export class WebsiteService {
  constructor() { }
  websites = [
    { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },{ "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
  ];
  api = {
    'createUser' : this.createWebsite,
    'findUserById' : this.findWebsiteById,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'updateUser' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };
  createWebsite(userId: string,website:any) {
    var ID =  Math.random().toString(36).substr(2, 3);
    website.developerId = userId ;
    website._id = ID;
    this.websites.push(website);
    return website;
  }
  findWebsitesByUser(userId: string) {
    var res:any = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId == userId) {
       res.push(this.websites[x]);
      }
    }
    return res;
  }
  findWebsiteById(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }

  updateWebsite(websiteId:string, website:any) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x].name = website.name;
        this.websites[x].description = website.description;
        return this.websites[x];
      }
    }
  }
  deleteWebsite(websiteId:string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x,1);
      }
    }
  }
}
