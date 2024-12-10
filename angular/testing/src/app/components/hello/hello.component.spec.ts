import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';
import { By } from '@angular/platform-browser';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Hello World! in paragraph', () => {
    fixture.componentRef.setInput('name', 'World');

    fixture.detectChanges();

    const elementP = fixture.debugElement.query(By.css('[data-testid="greeting-text"]'));
    const foundParagraph = elementP.nativeElement as HTMLParagraphElement;

    expect(foundParagraph.textContent).toBe('Hello World!')
  })
});
