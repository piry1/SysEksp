import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  constructor() { }
  canShowResults: boolean = false;
  ngOnInit() {
  }

  showResults() {
    this.canShowResults = true;
  }

  hideResults() {
    this.canShowResults = false;
  }
}
