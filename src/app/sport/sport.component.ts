import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  
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
