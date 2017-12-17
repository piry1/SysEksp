import { Component, OnInit } from '@angular/core';
import { UserData } from '../model/userdata';
import { Diet, Allergy } from '../model/diet';


@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  constructor() { }

  diet: Diet = new Diet();

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
    "awokado",
    "owoce morza"
  ];

  allergy: boolean[] = [];

  ngOnInit() {
    for (var i = 0; i < this.allergies.length; ++i)
      this.allergy[i] = false;
  }

  setFoodAllergy() {
    var ta = this.allergy;
    var a: Allergy = new Allergy();

    a.Egs = ta[0];
    a.Milk = ta[1];
    a.Nuts = ta[2];
    a.Soy = ta[3];
    a.Fish = ta[4];

    this.diet.Allergy = a;
  }


  showResults() {
    this.setFoodAllergy();
    UserData.diet = this.diet;
    UserData.diet.countMeals();
    this.canShowResults = true;
  }

  hideResults() {
    this.canShowResults = false;
  }
}
