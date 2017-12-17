import { Gender, Metabolism, PhisicalActivity, Plans, BodyFat, Water } from './enums';

export class FoodProportions {
    Fat: number;
    Protein: number;
    Carbohydrates: number;
    gFat: number;
    gProteins: number;
    gCarbohydrates: number;

    private readonly fatKcal = 9;
    private readonly proteinKcal = 4;
    private readonly carboKcal = 4;


    setProportions(metabolism: Metabolism, cpm: number) {
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

        this.gFat = (this.Fat * cpm) / this.fatKcal;
        this.gProteins = (this.Protein * cpm) / this.proteinKcal;
        this.gCarbohydrates = (this.Carbohydrates * cpm) / this.carboKcal;

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
    FoodProportions = new FoodProportions();
    Bmr: number = 0;
    ProposedMass: number = 0;
    Cpm: number = 0;
    WaterPercent: number = 0;
    FatPercent: number = 0;
    BodyFat: BodyFat = BodyFat.Average;
    Water: Water = Water.Norm;

    public countAllParams() {
        this.countProposedMass();
        this.countBmr();
        this.countCpm();
        this.FoodProportions.setProportions(this.Metabolism, this.Cpm);
        this.countBodyFat();
        this.countWater();
    }

    public countProposedMass(): number {
        var result = 0;
        if (this.Gender == Gender.Male)
            result = this.Height - 100 - (this.Height - 150) / 4;
        else if (this.Gender == Gender.Female)
            result = this.Height - 100 - (this.Height - 150) / 2;

        this.ProposedMass = result;
        return result;
    }

    public countCpm(): number {
        this.Cpm = this.Bmr * Paramiters.PAL[this.PhisicalActivity] * Paramiters.kPAL[this.Plans];
        return this.Cpm;
    }

    public countBmr(): number {
        var bmrHarris = this.countBmrHarris();
        var bmrMifflin = this.countBmrMifflin();
        var bmrMcArdle = this.countMcArdle();

        if (this.MuscleMass != 0)
            this.Bmr = (2 * bmrHarris + 2 * bmrMcArdle + bmrMifflin) / 5 + 100;
        else
            this.Bmr = (bmrHarris + bmrMifflin) / 2;

        return this.Bmr;
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

    private countBodyFat() {
        var bf: BodyFat;
        var k: number = 0;

        if (this.Gender == Gender.Male) {
            for (var i = 20; i <= 55; i += 5) {
                if (this.Age <= i || this.Age > 55) {
                    if (this.Age > 55)
                        k = 10;
                    if (this.FatPercent < 7 + k)
                        bf = BodyFat.Lean;
                    else if (this.FatPercent < 13 + k)
                        bf = BodyFat.Ideal;
                    else if (this.FatPercent < 21 + k)
                        bf = BodyFat.Average;
                    else
                        bf = BodyFat.Above;
                    break;
                }
                k++;
            }
        } else {
            for (var i = 20; i <= 55; i += 5) {
                if (this.Age <= i || this.Age > 55) {
                    if (this.Age > 55)
                        k = 7;
                    if (this.FatPercent < 17 + k)
                        bf = BodyFat.Lean;
                    else if (this.FatPercent < 23 + k)
                        bf = BodyFat.Ideal;
                    else if (this.FatPercent < 29 + k)
                        bf = BodyFat.Average;
                    else
                        bf = BodyFat.Above;
                    break;
                }
                k += 0.7;
            }
        }

        this.BodyFat = bf;
    }

    private countWater() {
        var wp = this.WaterPercent;
        var w: Water;

        if (this.Gender == Gender.Male) {
            if (wp < 60)
                w = Water.Below;
            else if (wp <= 65)
                w = Water.Norm;
            else
                w = Water.Abovew;
        } else {
            if (wp < 50)
                w = Water.Below;
            else if (wp <= 55)
                w = Water.Norm;
            else
                w = Water.Abovew;
        }

        this.Water = w;
    }
}

export class UserData {
    static body: User = new User();
}

export class Paramiters {
    static readonly PAL: number[] = [1.3, 1.4, 1.6, 1.75, 2, 2.3];
    static readonly kPAL: number[] = [1.13, 1, 0.87];
}

