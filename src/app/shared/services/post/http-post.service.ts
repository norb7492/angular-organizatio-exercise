import { Injectable } from '@angular/core';
import {delay, Observable, of,} from 'rxjs';
import { PostInterface } from './post.interface';
import {PostService} from "./postService";

@Injectable({
  providedIn: 'root'
})
export class HttpPostService extends PostService {
  constructor() {
    super();
  }

  public getPosts(): Observable<PostInterface[]> {
    const posts = [
      {id: '1', title: 'First post'},
      {id: '2', title: 'Second post'},
      {id: '3', title: 'Third post'}
    ]
    return of(posts).pipe(delay(1000));
  }
}
