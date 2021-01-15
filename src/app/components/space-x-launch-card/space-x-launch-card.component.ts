import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-space-x-launch-card',
  templateUrl: './space-x-launch-card.component.html',
  styleUrls: ['./space-x-launch-card.component.scss']
})
export class SpaceXLaunchCardComponent implements OnInit {
  @Input() record: Card = {};

  constructor() { }

  ngOnInit(): void {
  }

}​​​​​​​