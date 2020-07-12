import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl:string = "https://jsonplaceholder.typicode.com";
  constructor(private http:HttpClient) { }


  getPosts(){
    const url = this.baseUrl + "/posts";
    return this.http.get(url);
  }

  getPost(id: number){
    const url = this.baseUrl + '/posts/' + id;
    return this.http.get(url);
  }

  getUser(id: number){
    const url = this.baseUrl + '/users/' + id;
    return this.http.get(url);
  }
}
