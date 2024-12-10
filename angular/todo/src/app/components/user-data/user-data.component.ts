import { Component, inject } from '@angular/core';
import { IpService } from '../../services/ip.service';

@Component({
  selector: 'app-user-data',
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent {
  private ipService = inject(IpService);
  ip = this.ipService.ip;
}
