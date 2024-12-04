import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@Component({
  selector: 'app-root',
  imports: [PostsComponent, TvSeriesComponent, RegisterFormComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  visible: boolean = true;

  toggle() {
    this.visible = !this.visible;
  }
}
