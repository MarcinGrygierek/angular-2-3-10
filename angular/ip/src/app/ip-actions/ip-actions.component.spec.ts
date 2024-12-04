import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpActionsComponent } from './ip-actions.component';

describe('IpActionsComponent', () => {
  let component: IpActionsComponent;
  let fixture: ComponentFixture<IpActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
