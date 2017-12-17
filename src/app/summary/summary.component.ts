import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserData } from '../model/userdata';

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
