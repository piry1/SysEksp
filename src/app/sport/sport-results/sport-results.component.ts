import { Component, OnInit } from '@angular/core';
import { UserData } from '../../model/userdata';
import { Sport } from '../../model/sport';

@Component({
  selector: 'app-sport-results',
  templateUrl: './sport-results.component.html',
  styleUrls: ['./sport-results.component.css']
})
export class SportResultsComponent implements OnInit {

  sport: Sport;

  constructor() { }

  ngOnInit() {
    this.sport = UserData.sport;

  }

}
