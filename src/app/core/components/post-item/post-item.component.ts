import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../service/post.service';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;
  user: User;
  createdAt = new Date();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  async fetchUser(){
    this.user = await this.postService.getUser(this.post.userId);
  }

}
