import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

export class UserService {
  constructor() { }
  users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    {_id: "456", username: "yzh",password:"123",firstName:"Zihan",lastName:"Yu"}
  ];
  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };
  createUser(user: any) {
    var ID =  Math.random().toString(36).substr(2, 3);
    user._id = ID; //generate unique id here
    this.users.push(user);
    return user;
  }
  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }
    return null;
  }
  findUserByUsername(username: string) {
    for (let x = 0; x < this.users.length; x++) {
    if (this.users[x].username === username) {
      return this.users[x];
    }
    }
    return null;
  }
  updateUser(userId:string, user:any) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x].username = user.username;
        this.users[x].lastName = user.lastName;
        this.users[x].firstName = user.firstName;
        return this.users[x];
      }
    }
    return null;

  }
  deleteUser(userId:string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
          this.users.splice(x,1);
      }
    }
  }
}
