export class User {
    Gender: string;
    Age: number;
    Weight: number;
    Height: number;
    PhisicalActivity: PhisicalActivity;
    Plans: Plans;
}

enum Plans {
    Gain = "Planuje przytyć",
    Stay = "Planuje utrzymać wagę",
    Loose = "Planuję schudnąć"
}

enum PhisicalActivity {
    None = "Znikoma (brak ćwiczeń, praca siedząca, szkoła)",
    Small = "Bardzo mała (ćwiczenia raz na tydzień, praca lekka)",
    Normal = "Umiarkowana (ćwiczenia 2 razy w tygodniu - średniej intensywności)",
    Big = "Duża (dość ciężki trening kilka razy w tygodniu)",
    VerryBig = "Bardzo duża (przynajmniej 4 ciężkie treniengi w tygodniu, praca fizyczna)"
}