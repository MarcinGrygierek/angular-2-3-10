import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-active-user',
  imports: [AsyncPipe],
  templateUrl: './active-user.component.html',
  styleUrl: './active-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveUserComponent {
  // constructor(private userService: UserService) {}
  private userService = inject(UserService);
  activeUser$ = this.userService.getActiveUser();
  isAdult$ = this.userService.getActiveUser()
    .pipe(
      map(user => user.age >= 18)
    );
}
