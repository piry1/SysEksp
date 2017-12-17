import { FoodPref } from './enums';

export class Diet {
    Allergy: Allergy = new Allergy();
    FoodPreferences: FoodPref = FoodPref.All;
}

export class Allergy {
    Egs: boolean = false;
    Milk: boolean = false;
    Nuts: boolean = false;
    Soy: boolean = false;
    Fish: boolean = false;
}