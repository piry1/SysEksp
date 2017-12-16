import { Component, OnInit } from '@angular/core';
import { User, Gender, PhisicalActivity, Plans, Paramiters } from '../model/user';

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
    this.setChartValues();

    this.setTableResults();

    this.showResults();
    console.log(User.Bmr);
    console.log(User.Cpm);
    console.log(User.ProposedMass);
  }

  showResults() {
    this.canShowResults = true;
  }

  hideResults() {
    this.canShowResults = false;
  }

  setChartValues() {
    this.doughnutChartData[0] = Number(User.gProteins.toFixed());
    this.doughnutChartData[1] = Number(User.gCarbohydrates.toFixed());
    this.doughnutChartData[2] = Number(User.gFat.toFixed());
  }

  setTableResults() {
    this.results[0].value = User.Bmr.toFixed() + " kcal";
    this.results[1].value = User.Cpm.toFixed() + " kcal";
    this.results[2].value = this.user.Weight.toFixed(1) + " kg";
    this.results[3].value = User.ProposedMass.toFixed(1) + " kg";

    this.foodResults[0].value = User.gProteins.toFixed() + " g (" + Number(User.FoodProportions.Protein * 100).toFixed() + "%)";
    this.foodResults[1].value = User.gCarbohydrates.toFixed() + " g (" + Number(User.FoodProportions.Carbohydrates * 100).toFixed() + "%)";
    this.foodResults[2].value = User.gFat.toFixed() + " g (" + Number(User.FoodProportions.Fat * 100).toFixed() + "%)";
  }

}
