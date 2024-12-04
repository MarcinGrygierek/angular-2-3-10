import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { TVShowsResponse } from '../types/tv-series';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  private api = inject(ApiService);

  public getSuggestions(search: string) {
    return this.api.get<TVShowsResponse>(`search?q=${search}`);
  }
}
