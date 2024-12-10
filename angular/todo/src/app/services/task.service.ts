import { Injectable, signal } from '@angular/core';
import { TaskType } from '../types/task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks = signal<TaskType[]>([]);
  public tasks = this._tasks.asReadonly();

  addNewTask(title: string) {
    const newTask: TaskType = {
      id: new Date().getTime(),
      name: title
    }

    this._tasks.update(currentTasks => [...currentTasks, newTask]);
  }

  deleteTask(idToDelete: number) {
    this._tasks.update(currentTasks => currentTasks.filter(task => task.id !== idToDelete));
  }
}
