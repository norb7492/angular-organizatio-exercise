import { TestBed } from '@angular/core/testing';

import { HttpPostService } from './http-post.service';

describe('PostService', () => {
  let service: HttpPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
