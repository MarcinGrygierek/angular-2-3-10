import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ip-actions',
  imports: [],
  templateUrl: './ip-actions.component.html',
  styleUrl: './ip-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IpActionsComponent {
  doSomething() {
    console.log('lorem ipsum')
  }
}
