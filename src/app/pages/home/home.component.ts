import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/service/post.service';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fetch();
  }

  private async fetch() {
    const posts: Post[] = await this.postService.getPosts();
    this.posts = posts.filter(i => i.id < 20); // show 20 posts
  }



}
