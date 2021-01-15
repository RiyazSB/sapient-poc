import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SpaceXService } from './space-x.service';

describe('SpaceXService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: SpaceXService = TestBed.get(SpaceXService);
    expect(service).toBeTruthy();
  });

  it('Should fetch data from API', () => {
    const service: SpaceXService = TestBed.get(SpaceXService);
    spyOn(service['http'], 'get');
    service.getlaunches({ land_success: 'true' });
    const url = service['baseURL'] + '&land_success=true';
    expect(service['http'].get).toHaveBeenCalledWith(url);
  });
});
