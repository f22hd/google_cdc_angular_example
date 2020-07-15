import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/service/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/models/post.model';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    if (postId){
      this.fetchPost(postId);
    }
  }

  private async fetchPost(id){
    this.post = await this.postService.getPost(id);
  }

}
