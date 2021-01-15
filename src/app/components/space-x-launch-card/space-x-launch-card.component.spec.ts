import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXLaunchCardComponent } from './space-x-launch-card.component';

describe('SpaceXLaunchCardComponent', () => {
  let component: SpaceXLaunchCardComponent;
  let fixture: ComponentFixture<SpaceXLaunchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceXLaunchCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXLaunchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
