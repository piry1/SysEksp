import { FoodPref, Degree } from './enums';

export class Diet {
    Allergy: Allergy = new Allergy();
    FoodPreferences: FoodPref = FoodPref.All;
    Time: Degree = Degree.Medium;
    Money: Degree = Degree.Medium;
    Engagement: Degree = Degree.Medium;
}

export class Allergy {
    Egs: boolean = false;
    Milk: boolean = false;
    Nuts: boolean = false;
    Soy: boolean = false;
    Fish: boolean = false;
}