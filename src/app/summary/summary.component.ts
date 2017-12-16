import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }


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

  public doughnutChartLabels: string[] = ['Białko', 'Węglowodany', 'Tłuszcze'];
  public doughnutChartData: number[] = [1, 1, 1];
  public doughnutChartType: string = 'doughnut';

  ngOnInit() {
    this.setTableResults();
    this.setChartValues();
  }

  setChartValues() {
    this.doughnutChartData[0] = Number(User.gProteins.toFixed());
    this.doughnutChartData[1] = Number(User.gCarbohydrates.toFixed());
    this.doughnutChartData[2] = Number(User.gFat.toFixed());
  }

  setTableResults() {
    this.results[0].value = User.Bmr.toFixed() + " kcal";
    this.results[1].value = User.Cpm.toFixed() + " kcal";
    // this.results[2].value = this.user.Weight.toFixed(1) + " kg";
    this.results[3].value = User.ProposedMass.toFixed(1) + " kg";

    this.foodResults[0].value = User.gProteins.toFixed() + " g (" + Number(User.FoodProportions.Protein * 100).toFixed() + "%)";
    this.foodResults[1].value = User.gCarbohydrates.toFixed() + " g (" + Number(User.FoodProportions.Carbohydrates * 100).toFixed() + "%)";
    this.foodResults[2].value = User.gFat.toFixed() + " g (" + Number(User.FoodProportions.Fat * 100).toFixed() + "%)";
  }
}
