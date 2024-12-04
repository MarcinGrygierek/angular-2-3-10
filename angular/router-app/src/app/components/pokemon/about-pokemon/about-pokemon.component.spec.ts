import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPokemonComponent } from './about-pokemon.component';

describe('AboutPokemonComponent', () => {
  let component: AboutPokemonComponent;
  let fixture: ComponentFixture<AboutPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
