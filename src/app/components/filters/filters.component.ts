import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Filters } from 'src/app/models/card.model';
import * as _ from 'lodash';
import { SpaceXService } from 'src/app/services/space-x.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(private spaceXService: SpaceXService) { }

  filters: Filters = {};
  @Output() filtersChanged = new EventEmitter<Filters>();

  filterYears = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
  ];

  btns = [true, false];

  @Input() set filterApplied(filterApplied: Filters) {
    this.filters = _.cloneDeep(filterApplied);
  }

  ngOnInit(): void {
  }

  selectFilter(filter: string, value: any): void {
    if (this.filters[filter] !== value) {
      this.filters[filter] = value;
    } else {
      delete this.filters[filter];
    }
    this.filtersChanged.emit(this.filters);
  }

  download() {
    this.spaceXService.downloadPdf().subscribe((file: Blob) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
 
      const blobType = new Blob([file], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blobType);
      const aLink = document.createElement('a');
      aLink.href = url;
      window.open(url, '_blank');
      // aLink.target = '_blank',
      // aLink.download = 'dummy';
      // document.body.appendChild(aLink);
      // aLink.click();
      // aLink.remove();
      // const url = window.URL.createObjectURL(data);
      // const link = document.createElement('a');
      // link.href = url;
      // link.download = 'dummy';
      // link.click();
      // window.URL.revokeObjectURL(url);
    });
  }
}​​
