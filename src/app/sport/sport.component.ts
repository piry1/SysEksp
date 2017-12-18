import { Component, OnInit } from '@angular/core';
import { Sport } from '../model/sport';
import { UserData } from '../model/userdata';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor() { }

  canShowResults: boolean = false;

  sport: Sport = new Sport();


  scale: string[] = [
    "Mało",
    "Średnio",
    "Dużo"
  ];

  contraPartial: string[] = [
    "Niewydolność serca, zaburzenia rytmu pracy serca, obecność rozrusznika, migotanie przedsionków",
    "Nadciśnienie tętnicze",
    "Przewlekłe choroby układu oddechowego",
    "Cukrzyca wyrównana przez insulinę",
    "Schorzenia naczyń obwodowych powodujące ból podczas wysiłku",
    "Krótki okres po krwotoku wewnętrznym",
    "Niedokrwistość niewyrównana",
    "Choroba wrzodowa przewodu pokarmowego",
    "Przewlekłe choroby zapalne",
    "Choroby układu ruchu, wymagane leczenia przeciwbólowego",
    "Przewlekłe choroby układu moczowego i nerek",
  ];

  contra: string[] = [
    "Wysoki stopień niewydolności serca na skutek jego uszkodzenia, niewyrównana dusznica bolesna, kardiomiopatia, zbyt duży przerost mięśnia sercowego, tętniak, zwężeni ujścia aortalnego, zaburzenia rytmu serca wywoływane wysiłkiem, napadowe migotanie przedsionków",
    "Nagłe zmiany zakrzepowo-zatorowe",
    "Niestabilne nadciśnienie",
    "Niewydolność układu oddechowego",
    "Choroba wrzodowa przewodu pokarmowego w fazie zaostrzenia i powikłań",
    "Niewyrównana cukrzyca",
    "Stany zapalne"
  ]

  cp: boolean[] = [];
  c: boolean[] = [];

  ngOnInit() {
    document.getElementById("top").scrollIntoView();
    for (var i = 0; i < this.contraPartial.length; ++i)
      this.cp[i] = false;
    for (var i = 0; i < this.contra.length; ++i)
      this.c[i] = false;
  }

  setUserData() {
    this.cp.forEach(element => {
      if (element)
        this.sport.ContraPartial = true;
    });

    this.c.forEach(element => {
      if (element)
        this.sport.Contra = true;
    });

    UserData.sport = this.sport;
  }

  showResults() {
    document.getElementById("results").scrollIntoView();
    this.canShowResults = true;
  }

  hideResults() {
    this.canShowResults = false;
  }

}
