import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Promise<Post[]>{
    const url = this.baseUrl + '/posts';
    return this.http.get<Post[]>(url).toPromise();
  }

  getPost(id: number): Promise<Post>{
    const url = this.baseUrl + '/posts/' + id;
    return this.http.get<Post>(url).toPromise();
  }

  getUser(id: number): Promise<User>{
    const url = this.baseUrl + '/users/' + id;
    return this.http.get<User>(url).toPromise();
  }
}
