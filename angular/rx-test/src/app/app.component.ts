import { Component } from '@angular/core';
import { FooComponent } from './foo/foo.component';
import { CounterComponent } from './counter/counter.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { ButtonComponent } from './button/button.component';
import { StreamsComponent } from './streams/streams.component';
import { ErrorsComponent } from './errors/errors.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LoginFormComponent } from './login-form/login-form.component';


@Component({
  selector: 'app-root',
  imports: [FooComponent, CounterComponent, ActiveUserComponent, ButtonComponent, StreamsComponent, ErrorsComponent, ExerciseComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  visible: boolean = false;

  toggle() {
    this.visible = !this.visible;
  }
}
