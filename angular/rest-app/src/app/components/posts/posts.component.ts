import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../types/post';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  private postsService = inject(PostsService);
  posts = signal<Post[]>([]);
  error = signal<string>('');

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.error.set('');
      },
      error: (error) => this.error.set('Unable to fetch latest posts')
    })
  }
}
