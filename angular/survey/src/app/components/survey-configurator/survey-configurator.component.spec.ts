import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyConfiguratorComponent } from './survey-configurator.component';

describe('SurveyConfiguratorComponent', () => {
  let component: SurveyConfiguratorComponent;
  let fixture: ComponentFixture<SurveyConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyConfiguratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
