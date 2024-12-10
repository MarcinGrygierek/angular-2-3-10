import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';

class PokemonServiceMock {
  data = signal<string[]>([]);

  getPokemon() {
    this.data.set(['Lorem', 'Ipsum'])
  }
}

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonComponent],
      providers: [
        {
          provide: PokemonService,
          useClass: PokemonServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render no list elements', () => {
    const listElements = fixture.debugElement.queryAll(By.css('[data-testid="list-element"]'));
    
    expect(listElements.length).toBe(0);
  })

  it('should render 2 elements after clicking button', () => {
    const listButton = fixture.debugElement.query(By.css('[data-testid="list-button"]'));

    listButton.triggerEventHandler('click', {})

    fixture.detectChanges();

    const listElements = fixture.debugElement.queryAll(By.css('[data-testid="list-element"]'));

    expect(listElements.length).toBe(2);
  })
});
