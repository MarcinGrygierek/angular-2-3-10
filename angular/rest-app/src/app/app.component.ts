import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BarComponent } from './components/bar/bar.component';
import { FooComponent } from './components/foo/foo.component';
import { LoremComponent } from './components/lorem/lorem.component';
import { DataComponent } from './components/data/data.component';
import { SignalComponent } from './components/signal/signal.component';
import { HelloComponent } from './components/hello/hello.component';

@Component({
  selector: 'app-root',
  imports: [
    SignalComponent,
    DataComponent,
    HelloComponent,
    FooComponent, BarComponent,
    PostsComponent, TvSeriesComponent, RegisterFormComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  visible: boolean = true;
  message: string = 'I just wanted to say hi';

  toggle() {
    this.visible = !this.visible;
  }

  handleHello(data: string) {
    console.log(data);
  }

  ngOnInit(): void {
      setTimeout(() => {
        this.message = 'Or just get to know you'
      }, 1000)
  }
}
