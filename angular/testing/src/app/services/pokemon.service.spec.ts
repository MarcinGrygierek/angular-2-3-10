import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { Observable, of } from 'rxjs';
import { PokemonResponse } from '../types/pokemon';
import { ApiService } from './api.service';
import { provideHttpClient } from '@angular/common/http';

class ApiServiceMock {
  get(url: string) {
    return of({
      count: 2,
      results: [
        {
          name: 'Lorem',
          url: 'http://www.google'
        },
        {
          name: 'Lorem',
          url: 'http://www.google'
        }
      ]
    }) as Observable<PokemonResponse>
  }
}

describe('PokemonService', () => {
  let service: PokemonService;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiSerivce', ['get']);
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        // { provide: ApiService, useClass: ApiServiceMock }
        {
          provide: ApiService, useValue: apiServiceSpy
        }
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save received data', () => {
    apiServiceSpy.get.and.returnValue(of({
      count: 2,
      results: [
        {
          name: 'Lorem',
          url: 'http://www.google'
        },
        {
          name: 'Ipsum',
          url: 'http://www.google'
        }
      ]
    }))

    service.getPokemon();

    expect(service.data().length).toBe(2)
    expect(service.data()).toEqual(['Lorem', 'Ipsum'])
  })

  it('should not contain any data', () => {
    expect(service.data().length).toBe(0)
  })
});
