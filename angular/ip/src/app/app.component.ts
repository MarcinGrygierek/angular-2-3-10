import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IpAddressComponent } from './ip-address/ip-address.component';
import { IpActionsComponent } from './ip-actions/ip-actions.component';
import { IpAddressSecondComponent } from './ip-address-second/ip-address-second.component';

@Component({
  selector: 'app-root',
  imports: [IpAddressComponent, IpActionsComponent, IpAddressSecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
