import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFirstComponent } from './pokemon-first.component';

describe('PokemonFirstComponent', () => {
  let component: PokemonFirstComponent;
  let fixture: ComponentFixture<PokemonFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
