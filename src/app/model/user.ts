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
}

export class Paramiters {
    static readonly PAL: number[] = [1.3, 1.4, 1.6, 1.75, 2, 2, 3];
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