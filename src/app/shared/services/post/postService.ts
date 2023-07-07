import {Observable} from "rxjs";
import {PostInterface} from "./post.interface";

export abstract class PostService {
  abstract getPosts(): Observable<PostInterface[]>;
}
