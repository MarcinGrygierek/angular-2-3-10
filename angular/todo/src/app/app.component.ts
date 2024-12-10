import { Component, inject, OnInit } from '@angular/core';
import { TodoManagerComponent } from './components/todo-manager/todo-manager.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { IpService } from './services/ip.service';

@Component({
  selector: 'app-root',
  imports: [TodoManagerComponent, UserDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private ipService = inject(IpService);

  ngOnInit(): void {
      this.ipService.getIp();
  }
}
