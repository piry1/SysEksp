export class User {
    Gender: Gender = Gender.Male;
    Age: number = 0;
    Weight: number = 0;
    Height: number = 0;
    PhisicalActivity: PhisicalActivity = PhisicalActivity.None;
    Plans: Plans = Plans.Stay;
    MuscleMass = 0;
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
    VerryBig
}

export enum Gender {
    Male,
    Female
}