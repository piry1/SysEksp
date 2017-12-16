export class FoodProportions {
    Fat: number;
    Protein: number;
    Carbohydrates: number;

    setProportions(metabolism: Metabolism) {
        if (metabolism == Metabolism.Ektomorfik) {
            this.Fat = 0.20;
            this.Carbohydrates = 0.55;
            this.Protein = 0.25;
        } else if (metabolism == Metabolism.Endomorfik) {
            this.Fat = 0.35;
            this.Carbohydrates = 0.30;
            this.Protein = 0.35;
        } else if (metabolism == Metabolism.Mezomorfik) {
            this.Fat = 0.25;
            this.Carbohydrates = 0.45;
            this.Protein = 0.30;
        }

    }
}

export class User {
    Gender: Gender = Gender.Male;
    Age: number = 0;
    Weight: number = 0;
    Height: number = 0;
    PhisicalActivity: PhisicalActivity = PhisicalActivity.None;
    Plans: Plans = Plans.Stay;
    MuscleMass: number = 0;
    Metabolism: Metabolism = Metabolism.Ektomorfik;
    static FoodProportions = new FoodProportions();
    static Bmr: number = 0;
    static ProposedMass: number = 0;
    static Cpm: number = 0;
    static gFat: number;
    static gProteins: number;
    static gCarbohydrates: number;

    public countAllParams() {
        this.countProposedMass();
        this.countBmr();
        this.countCpm();
        User.FoodProportions.setProportions(this.Metabolism);
        this.countFoodGrams();
    }


    public countFoodGrams() {
        User.gFat = (User.FoodProportions.Fat * User.Cpm) / Paramiters.FoodCalories[0].value;
        User.gProteins = (User.FoodProportions.Protein *User.Cpm) / Paramiters.FoodCalories[1].value;
        User.gCarbohydrates = (User.FoodProportions.Carbohydrates * User.Cpm) / Paramiters.FoodCalories[2].value;
    }

    public countProposedMass(): number {
        var result = 0;
        if (this.Gender == Gender.Male)
            result = this.Height - 100 - (this.Height - 150) / 4;
        else if (this.Gender == Gender.Female)
            result = this.Height - 100 - (this.Height - 150) / 2;

        User.ProposedMass = result;
        return result;
    }

    public countCpm(): number {
        User.Cpm = User.Bmr * Paramiters.PAL[this.PhisicalActivity] * Paramiters.kPAL[this.Plans];
        return User.Cpm;
    }

    public countBmr(): number {
        var bmrHarris = this.countBmrHarris();
        var bmrMifflin = this.countBmrMifflin();
        var bmrMcArdle = this.countMcArdle();

        if (this.MuscleMass != 0)
            User.Bmr = (2 * bmrHarris + 2 * bmrMcArdle + bmrMifflin) / 5 + 100;
        else
            User.Bmr = (bmrHarris + bmrMifflin) / 2;

        return User.Bmr;
    }

    private countBmrHarris(): number {
        var a;
        var b;
        var c;
        var d;

        if (this.Gender == Gender.Male) {
            a = 66;
            b = 13.7;
            c = 5;
            d = 4.7;
        } else if (this.Gender == Gender.Female) {
            a = 655;
            b = 9.6;
            c = 1.8;
            d = 4.7;
        }

        return a + b * this.Weight + c * this.Height + - d * this.Age;
    }

    private countBmrMifflin(): number {
        var a = 9.99;
        var b = 6.25;
        var c = 4.92;

        var result = 0;
        if (this.Gender == Gender.Male) {
            result = a * this.Weight + b * this.Height - c * this.Age + 5;
        } else if (this.Gender == Gender.Female) {
            result = a * this.Weight + b * this.Height - c * this.Age - 161;
        }

        return result;
    }

    private countMcArdle(): number {
        return 370 + (21.6 * this.MuscleMass);
    }
}



export class Paramiters {
    static readonly PAL: number[] = [1.3, 1.4, 1.6, 1.75, 2, 2.3];
    static readonly kPAL: number[] = [1.13, 1, 0.87];
    static readonly FoodCalories: { readonly name: string, value: number }[] = [
        { "name": "Fat", "value": 9 },
        { "name": "Protein", "value": 4 },
        { "name": "Carbohydrates", "value": 4 }
    ];
}

export enum Plans {
    Gain,
    Stay,
    Loose
}

export enum Metabolism {
    Ektomorfik,
    Mezomorfik,
    Endomorfik
}

export enum PhisicalActivity {
    None,
    Small,
    Normal,
    Big,
    VerryBig,
    Extreme
}

export enum Gender {
    Male,
    Female
}