import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private timeout!: number;

  ngOnInit(): void {
    this.timeout = setTimeout(() => {
      this.router.navigate(['/'])
    }, 5000) as unknown as number;
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
