import { Component, OnInit } from '@angular/core';
import { UserData } from '../../model/userdata';
import { Diet, Allergy } from '../../model/diet';

@Component({
  selector: 'app-diet-results',
  templateUrl: './diet-results.component.html',
  styleUrls: ['./diet-results.component.css']
})
export class DietResultsComponent implements OnInit {

  constructor() { }

  diet: Diet;

  ngOnInit() {
  
    this.diet = UserData.diet;
  }

}
