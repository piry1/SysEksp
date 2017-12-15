import { Component, OnInit } from '@angular/core';
import { User, Gender, PhisicalActivity, Plans } from '../model/user';
import { listenerCount } from 'cluster';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {


  constructor() { }

  private Bmr = 0;

  activities: string[] = [
    "Znikoma (brak ćwiczeń, praca siedząca, szkoła)",
    "Bardzo mała (ćwiczenia raz na tydzień, praca lekka)",
    "Umiarkowana (ćwiczenia 2 razy w tygodniu - średniej intensywności)",
    "Duża (dość ciężki trening kilka razy w tygodniu)",
    "Bardzo duża (przynajmniej 4 ciężkie treniengi w tygodniu, praca fizyczna)"
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
    //console.log("Calc BMR");
    //console.log(this.user);

    var bmrHarris = this.countBmrHarris();
    var bmrMifflin = this.countBmrMifflin();
    var bmrMcArdle = this.countMcArdle();

    if (bmrMcArdle != 0)
      this.Bmr = (bmrHarris + bmrMcArdle + bmrMifflin) / 3;
    else
      this.Bmr = (bmrHarris + bmrMifflin) / 2;

    console.log(this.Bmr);
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

}
