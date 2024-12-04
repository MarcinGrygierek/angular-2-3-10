import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressSecondComponent } from './ip-address-second.component';

describe('IpAddressSecondComponent', () => {
  let component: IpAddressSecondComponent;
  let fixture: ComponentFixture<IpAddressSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpAddressSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpAddressSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
