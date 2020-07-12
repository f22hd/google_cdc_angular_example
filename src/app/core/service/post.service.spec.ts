import { TestBed, async } from '@angular/core/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should posts be fetched',async ()  => {
    const list = await service.getPosts().toPromise();
    console.log(list)
    expect(list).toBeDefined();
  })
});
