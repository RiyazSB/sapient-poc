import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should update the selected filters to parent component', () => {
    spyOn(component.filtersChanged, 'emit');
    component.filterApplied = {};
    component.selectFilter('land_success', 'true');
    expect(component.filtersChanged.emit).toHaveBeenCalledWith({ land_success: 'true' });
  });

  it('Should remove the selected filters if unselected Toggle', () => {
    spyOn(component.filtersChanged, 'emit');
    component.filterApplied = { land_success: 'true' };
    component.selectFilter('land_success', 'true');
    expect(component.filtersChanged.emit).toHaveBeenCalledWith({});
  });
});
