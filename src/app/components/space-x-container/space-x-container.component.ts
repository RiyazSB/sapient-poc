import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card, Filters, SpaceXData } from 'src/app/models/card.model';
import { SpaceXService } from 'src/app/services/space-x.service';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-space-x-container',
  templateUrl: './space-x-container.component.html',
  styleUrls: ['./space-x-container.component.scss']
})
export class SpaceXContainerComponent implements OnInit, OnDestroy {

  filterApplied: Filters = {};

  public spaceXArray: Card[] = [];
  private subScriptions = new Subscription();

  constructor(private spaceXService: SpaceXService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subScriptions.add(this.route.queryParams.subscribe(params => {
      this.filterApplied = params;
      this.getLaunchesFromAPI();
    }));
  }

  processData(data: SpaceXData[]): Card[] {
    const processedData = data.map((record: SpaceXData) => {
      const item: Card = {};
      item.flightNumber = record.flight_number;
      item.imgUrl = record.links.mission_patch;
      item.launchLanding = record.rocket.first_stage.cores[0].land_success;
      item.launchSuccess = record.launch_success;
      item.launchYear = record.launch_year;
      item.missionIds = record.mission_id;
      item.missionName = record.mission_name;
      return item;
    });
    return processedData;
  }

  getLaunchesFromAPI(): void {
    this.subScriptions.add(this.spaceXService.getlaunches(this.filterApplied).subscribe((data: SpaceXData[]) => {
      this.spaceXArray = this.processData(data);
    }));
  }
  updateFilters(filters: Filters): void {
    this.filterApplied = Object.assign({}, filters);
    this.router.navigate(
      ['.'],
      {
        relativeTo: this.route,
        queryParams: filters
      });
    this.getLaunchesFromAPI();
  }

  ngOnDestroy(): void {
    this.subScriptions.unsubscribe();
  }

}

