import { Component, OnInit } from '@angular/core';
import { User, Gender, PhisicalActivity, Plans, Paramiters } from '../model/user';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {


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
    //console.log("Calc BMR");
    //console.log(this.user);

    var bmrHarris = this.countBmrHarris();
    var bmrMifflin = this.countBmrMifflin();
    var bmrMcArdle = this.countMcArdle();

    if (bmrMcArdle != 0)
      User.Bmr = (bmrHarris + bmrMcArdle + bmrMifflin) / 3;
    else
      User.Bmr = (bmrHarris + bmrMifflin) / 2;

    User.ProposedMass = this.countLorentz();

    User.Cpm = this.countCpm(User.Bmr, Paramiters.PAL[this.user.PhisicalActivity])


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
