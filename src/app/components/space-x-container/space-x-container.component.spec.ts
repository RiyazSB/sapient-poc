import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import * as _ from 'lodash';

import { SpaceXContainerComponent } from './space-x-container.component';
import { FiltersComponent } from '../filters/filters.component';
import { SpaceXLaunchCardComponent } from '../space-x-launch-card/space-x-launch-card.component';

describe('SpaceXContainerComponent', () => {
  let component: SpaceXContainerComponent;
  let fixture: ComponentFixture<SpaceXContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SpaceXContainerComponent,
        FiltersComponent,
        SpaceXLaunchCardComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('SHould fetch Launch data with filters applied', () => {
    spyOn(component['spaceXService'], 'getlaunches').and.returnValue(of(spaceXData));
    component.updateFilters({ land_success: 'true' });
    expect(component['spaceXService'].getlaunches).toHaveBeenCalledWith({ land_success: 'true' });
  });

  it('Should fetch Launch data from server', () => {
    const processedData = [
      {
        flightNumber: 1,
        imgUrl: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
        launchLanding: null,
        launchSuccess: false,
        launchYear: '2006',
        missionIds: [],
        missionName: 'FalconSat'
      }
    ];
    spyOn(component['spaceXService'], 'getlaunches').and.returnValue(of(spaceXData));
    component.getLaunchesFromAPI();
    expect(_.isEqual(processedData, component.spaceXArray)).toBeTruthy();
  });
});