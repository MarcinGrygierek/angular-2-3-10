import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map, Observable, of, timer } from 'rxjs';
import { User } from '../types/user';
import { ExerciseService } from '../exercise.service';
import { AsyncPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-exercise',
  imports: [AsyncPipe, NgForOf],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseComponent {
  private exerciseService = inject(ExerciseService);

  users$ = this.exerciseService.getUsers();
  adults$ = this.users$.pipe(
    map(users => users.filter(user => user.age >= 18))
  )

  userTrackBy(index: number, user: User) {
    return user.id
  }
}
