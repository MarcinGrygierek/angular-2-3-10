import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSecondComponent } from './pokemon-second.component';

describe('PokemonSecondComponent', () => {
  let component: PokemonSecondComponent;
  let fixture: ComponentFixture<PokemonSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
