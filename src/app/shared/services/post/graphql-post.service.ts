import { Injectable } from '@angular/core';
import {PostServiceInterface} from "./post.service.interface";
import {delay, Observable, of} from "rxjs";
import {PostInterface} from "./post.interface";

@Injectable({
  providedIn: 'root'
})
export class GraphqlPostService implements PostServiceInterface {

  constructor() { }

  public getPosts(): Observable<PostInterface[]> {
    const posts = [
      {id: '1', title: 'First post from Graphql'},
      {id: '2', title: 'Second post from Graphql'},
      {id: '3', title: 'Third post from Graphql'}
    ]
    return of(posts).pipe(delay(1000));
  }
}
