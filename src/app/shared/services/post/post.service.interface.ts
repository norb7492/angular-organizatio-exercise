import {Observable} from "rxjs";
import {PostInterface} from "./post.interface";

export abstract class PostServiceInterface {
  abstract getPosts(): Observable<PostInterface[]>;
}
