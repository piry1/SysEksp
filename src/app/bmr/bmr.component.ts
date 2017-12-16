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

  user = new User();
  canShowResults: boolean = false;

  ngOnInit() {
  }

  calcBmr() {

    this.user.countAllParams();

    this.results[0].value = User.Bmr.toFixed() + " kcal";
    this.results[1].value = User.Cpm.toFixed() + " kcal";
    this.results[2].value = this.user.Weight.toFixed(1) + " kg";
    this.results[3].value = User.ProposedMass.toFixed(1) + " kg";

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

}
