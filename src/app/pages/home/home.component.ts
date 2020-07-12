import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fetch()
  }

  private async fetch() {
    const posts: any = await this.postService.getPosts().toPromise();
    this.posts = posts.filter(i => i.id < 20);
    console.log(this.posts)
  }



}
