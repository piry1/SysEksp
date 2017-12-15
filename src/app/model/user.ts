export class User {
    Gender: Gender = Gender.Male;
    Age: number = 0;
    Weight: number = 0;
    Height: number = 0;
    PhisicalActivity: PhisicalActivity = PhisicalActivity.None;
    Plans: Plans = Plans.Stay;
    MuscleMass: number = 0;
    static Bmr: number = 0;
    static ProposedMass: number = 0;
    static Cpm: number = 0;


    public countAllParams() {
        this.countProposedMass();
        this.countBmr();
        this.countCpm();
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
        User.Cpm = User.Bmr * Paramiters.PAL[this.PhisicalActivity];
        return User.Cpm;
    }

    public countBmr(): number {
        var bmrHarris = this.countBmrHarris();
        var bmrMifflin = this.countBmrMifflin();
        var bmrMcArdle = this.countMcArdle();

        if (bmrMcArdle != 0)
            User.Bmr = (bmrHarris + bmrMcArdle + bmrMifflin) / 3;
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
}

export enum Plans {
    Gain = 0,
    Stay,
    Loose
}

export enum PhisicalActivity {
    None = 0,
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