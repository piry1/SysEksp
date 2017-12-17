import { Component, OnInit } from '@angular/core';
import { User, Paramiters, UserData } from '../../model/user';
import { BodyFat } from '../../model/enums';

@Component({
  selector: 'app-bmr-results',
  templateUrl: './bmr-results.component.html',
  styleUrls: ['./bmr-results.component.css']
})
export class BmrResultsComponent implements OnInit {

  constructor() { }

  public doughnutChartLabels: string[] = ['Białko', 'Węglowodany', 'Tłuszcze'];
  public doughnutChartData: number[] = [1, 1, 1];
  public doughnutChartType: string = 'doughnut';

  results: { readonly name: string, value: string }[] = [
    { "name": "BMR", "value": "" },
    { "name": "CPM", "value": "" },
    { "name": "Aktualna masa", "value": "" },
    { "name": "Proponowana masa", "value": "" },
    { "name": "Poziom tkanki tłuszczowej", "value": "" }
  ];

  foodResults: { readonly name: string, value: string }[] = [
    { "name": "Białko", "value": "" },
    { "name": "Węglowodany", "value": "" },
    { "name": "Tłuszcze", "value": "" }
  ];

  ngOnInit() {

    this.setChartValues();
    this.setTableResults();
  }

  setChartValues() {
    this.doughnutChartData[0] = Number(UserData.body.FoodProportions.gProteins.toFixed());
    this.doughnutChartData[1] = Number(UserData.body.FoodProportions.gCarbohydrates.toFixed());
    this.doughnutChartData[2] = Number(UserData.body.FoodProportions.gFat.toFixed());
  }

  setTableResults() {

    var fatName = "";

    switch (UserData.body.BodyFat) {
      case BodyFat.Lean: fatName = "Niedowaga"; break;
      case BodyFat.Ideal: fatName = "Ideał"; break;
      case BodyFat.Average: fatName = "W normie"; break;
      case BodyFat.Above: fatName = "Nadwaga"; break;
    }

    this.results[0].value = UserData.body.Bmr.toFixed() + " kcal";
    this.results[1].value = UserData.body.Cpm.toFixed() + " kcal";
    this.results[2].value = UserData.body.Weight.toFixed(1) + " kg";
    this.results[3].value = UserData.body.ProposedMass.toFixed(1) + " kg";
    this.results[4].value = UserData.body.FatPercent.toFixed(1) + "% : " + fatName;

    this.foodResults[0].value = UserData.body.FoodProportions.gProteins.toFixed() + " g (" + Number(UserData.body.FoodProportions.Protein * 100).toFixed() + "%)";
    this.foodResults[1].value = UserData.body.FoodProportions.gCarbohydrates.toFixed() + " g (" + Number(UserData.body.FoodProportions.Carbohydrates * 100).toFixed() + "%)";
    this.foodResults[2].value = UserData.body.FoodProportions.gFat.toFixed() + " g (" + Number(UserData.body.FoodProportions.Fat * 100).toFixed() + "%)";
  }

}
