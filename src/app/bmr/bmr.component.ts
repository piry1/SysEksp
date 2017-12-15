import { Component, OnInit } from '@angular/core';
import { User, Gender, PhisicalActivity, Plans, Paramiters } from '../model/user';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
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

  user = new User();

  ngOnInit() {
  }

  calcBmr() {

    this.user.countAllParams();

    console.log(User.Bmr);
    console.log(User.Cpm);
    console.log(User.ProposedMass);
  }

  countBmrHarris() {
    var a;
    var b;
    var c;
    var d;
    var user = this.user;

    if (user.Gender == Gender.Male) {
      a = 66;
      b = 13.7;
      c = 5;
      d = 4.7;
    } else if (user.Gender == Gender.Female) {
      a = 655;
      b = 9.6;
      c = 1.8;
      d = 4.7;
    }

    return a + b * user.Weight + c * user.Height + - d * user.Age;
  }

  countBmrMifflin() {
    var a = 9.99;
    var b = 6.25;
    var c = 4.92;
    var user = this.user;
    var result = 0;
    if (user.Gender == Gender.Male) {
      result = a * user.Weight + b * user.Height - c * user.Age + 5;
    } else if (user.Gender == Gender.Female) {
      result = a * user.Weight + b * user.Height - c * user.Age - 161;
    }

    return result;
  }

  countMcArdle() {
    return 370 + (21.6 * this.user.MuscleMass);
  }

  countLorentz() {
    var user = this.user;
    var result = 0;
    if (user.Gender == Gender.Male)
      result = user.Height - 100 - (user.Height - 150) / 4;
    else if (user.Gender == Gender.Female)
      result = user.Height - 100 - (user.Height - 150) / 2;

    return result;
  }

  countCpm(bmr: number, pal: number): number {
    return bmr * pal;
  }

}
