import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

export class WidgetService {
  constructor() { }
  widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
      "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
      "url": "https://www.youtube.com/embed/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
  ];
  api = {
    'createWidget' : this.createWidget,
    'findWidgetById' : this.findWidgetById,
    'findWidgetByPageId' : this.findWidgetByPageId,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };
  createWidget(pageId : string, Widget : any) {
    var ID =  Math.random().toString(36).substr(2, 3);
    Widget._id = ID;
    Widget.pageId = pageId ;
    this.widgets.push(Widget);
    return Widget;
  }
  findWidgetById(WidgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === WidgetId) {
        return this.widgets[x];
      }
    }
  }
  findWidgetByPageId(pageId: string) {
    var res:any=[];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        res.push(this.widgets[x]);
      }
    }
    return res;
  }
  updateWidget(WidgetId, Widget:any) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === WidgetId) {
        if(this.widgets[x].widgetType=="YOUTUBE"){
          (<any>this.widgets[x]).url= Widget.url;
          (<any>this.widgets[x]).width = Widget.width;
          if(Widget.hasOwnProperty("name"))
            (<any>this.widgets[x]).name = Widget.name;
          if(Widget.hasOwnProperty("text"))
            (<any>this.widgets[x]).text = Widget.text;
        }
        if(this.widgets[x].widgetType=="IMAGE"){
          (<any>this.widgets[x]).url= Widget.url;
          (<any>this.widgets[x]).width = Widget.width;
          if(Widget.hasOwnProperty("name"))
            (<any>this.widgets[x]).name = Widget.name;
          if(Widget.hasOwnProperty("text"))
            (<any>this.widgets[x]).text = Widget.text;
        }
        if(this.widgets[x].widgetType=="HEADING"){
          (<any>this.widgets[x]).text= Widget.text;
          (<any>this.widgets[x]).size = Widget.size;
          if(Widget.hasOwnProperty("name"))
            (<any>this.widgets[x]).name = Widget.name;
        }
        return this.widgets[x];
      }
    }
  }
  deleteWidget(WidgetId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === WidgetId) {
        this.widgets.splice(x,1);
      }
    }
  }
}
