import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {IObjectDto} from "../../shared/components/component-with-object/object-dto.interface";
import {HttpPostService} from "../../shared/services/post/http-post.service";
import {PostServiceInterface} from "../../shared/services/post/post.service.interface";
import {GraphqlPostService} from "../../shared/services/post/graphql-post.service";

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  providers: [{
    provide: PostServiceInterface, useExisting: GraphqlPostService
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent {

  constructor(private postService: PostServiceInterface) {
  }

  public personDto: IObjectDto = {
    id: '1231SDAsda',
    name: 'Katia',
    age: 22
  }

  public callPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => {
        console.log('posts', posts);
      });
  }
}
