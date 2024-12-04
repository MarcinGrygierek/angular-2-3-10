import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private api = inject(ApiService);

  public getPosts() {
    return this.api.get<Post[]>('posts')
  }
}
