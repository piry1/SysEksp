import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  constructor() { }

  canShowResults: boolean = false;

  scale: string[] = [
    "Mało",
    "Średnio",
    "Dużo"
  ];

  foodPreferences: string[] = [
    "Jem wszystko",
    "Wegetarianin",
    "Weganin"
  ];

  allergies: string[] = [
    "jajka",
    "mleko",
    "orzeszki ziemne i inne orzechy",
    "soja",
    "owoce morza"
  ];

  ngOnInit() {
  }

  showResults() {
    this.canShowResults = true;
  }

  hideResults() {
    this.canShowResults = false;
  }
}
