import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { TvService } from '../../services/tv.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tv-series',
  imports: [ReactiveFormsModule, AsyncPipe, JsonPipe],
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.scss'
})
export class TvSeriesComponent {
  private tvService = inject(TvService);

  searchQuery = new FormControl('');

  suggestions$ = this.searchQuery.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this.tvService.getSuggestions(value || '')),
      map(response => ({ data: response.tv_shows, error: '' })),
      catchError(_ => of({ data: [], error: 'Could not load TV series' }))
    )
}
