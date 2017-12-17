import { Component, OnInit } from '@angular/core';
import { User, Paramiters, UserData } from '../model/user';
import { Gender, PhisicalActivity, Plans } from '../model/enums';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Białko', 'Węglowodany', 'Tłuszcze'];
  public doughnutChartData: number[] = [1, 1, 1];
  public doughnutChartType: string = 'doughnut';

  constructor() { }

  activities: string[] = [
    "Bezruch np. dla pacjenta choreg leżącego w łóżku ",
    "Bardzo mała (ćwiczenia raz na tydzień, praca lekka)",
    "Umiarkowana (ćwiczenia 2 razy w tygodniu - średniej intensywności)",
    "Duża (dość ciężki trening kilka razy w tygodniu)",
    "Bardzo duża (przynajmniej 4 ciężkie treniengi w tygodniu, praca fizyczna)",
    "Wyczynowe uprawianie sportu"
  ];

  plans: string[] = [
    "Planuje przytyć",
    "Planuje utrzymać wagę",
    "Planuję schudnąć"
  ]

  metabolism: string[] = [
    "Ektomorfik",
    "Mezomorfik",
    "Endomorfik"
  ]

  results: { readonly name: string, value: string }[] = [
    { "name": "BMR", "value": "" },
    { "name": "CPM", "value": "" },
    { "name": "Aktualna masa", "value": "" },
    { "name": "Proponowana masa", "value": "" }
  ];

  foodResults: { readonly name: string, value: string }[] = [
    { "name": "Białko", "value": "" },
    { "name": "Węglowodany", "value": "" },
    { "name": "Tłuszcze", "value": "" }
  ];

  user = new User();
  canShowResults: boolean = false;

  ngOnInit() {
  }

  calcBmr() {
    this.user.countAllParams();
    UserData.body = this.user;

    this.setChartValues();
    this.setTableResults();
    this.showResults();
  }

  showResults() {
    this.canShowResults = true;
  }

  hideResults() {
    this.canShowResults = false;
  }

  setChartValues() {
    this.doughnutChartData[0] = Number(UserData.body.FoodProportions.gProteins.toFixed());
    this.doughnutChartData[1] = Number(UserData.body.FoodProportions.gCarbohydrates.toFixed());
    this.doughnutChartData[2] = Number(UserData.body.FoodProportions.gFat.toFixed());
  }

  setTableResults() {
    this.results[0].value = UserData.body.Bmr.toFixed() + " kcal";
    this.results[1].value = UserData.body.Cpm.toFixed() + " kcal";
    this.results[2].value = UserData.body.Weight.toFixed(1) + " kg";
    this.results[3].value = UserData.body.ProposedMass.toFixed(1) + " kg";

    this.foodResults[0].value = UserData.body.FoodProportions.gProteins.toFixed() + " g (" + Number(UserData.body.FoodProportions.Protein * 100).toFixed() + "%)";
    this.foodResults[1].value = UserData.body.FoodProportions.gCarbohydrates.toFixed() + " g (" + Number(UserData.body.FoodProportions.Carbohydrates * 100).toFixed() + "%)";
    this.foodResults[2].value = UserData.body.FoodProportions.gFat.toFixed() + " g (" + Number(UserData.body.FoodProportions.Fat * 100).toFixed() + "%)";
  }

}
