import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './preloader/preloader.component';
import { filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, PreloaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponents implements OnInit {
  private router = inject(Router);

  isPreloading$ = this.router.events.pipe(
    filter(event => {
      if(event instanceof NavigationStart || event instanceof NavigationEnd) return true;
      return false
    }),
    map(event => {
      if(event instanceof NavigationStart) return true;
      return false;
    })
  )

  ngOnInit(): void {
      this.router.events.subscribe(console.log);
  }
}
