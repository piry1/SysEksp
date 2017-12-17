import { FoodPref, Degree, Plans } from './enums';
import { UserData } from './userdata';

export class Diet {
    Allergy: Allergy = new Allergy();
    FoodPreferences: FoodPref = FoodPref.All;
    Time: Degree = Degree.Medium;
    Money: Degree = Degree.Medium;
    Engagement: Degree = Degree.Medium;

    bPropositions: string[] = [];
    sPropositions: string[] = [];

    countMeals() {
        this.bPropositions = [];
        this.sPropositions = [];

        var b = UserData.body;
        var m = ((b.Weight - 5) * b.Cpm) / b.Bmr;

        var i = 0;

        if (!this.Allergy.Egs && this.FoodPreferences != FoodPref.Vegan) {
            this.bPropositions[i] = "Jajecznica z " + ((3 / 70) * m).toFixed() + " jaj ( " + ((1 / 70) * m).toFixed() + " żółtko + " + ((3 / 70) * m).toFixed() + " białka) z delikatnym dodatkiem soli + kromki chleba razowego z mąki razowej żytnie a nie pszennej! ("
                + m.toFixed() + " gr) lub " + ((4 / 70) * m).toFixed() + " kromki pieczywa Wasa + owoc ( plaster świeżego ananasa (nie z puszki) lub jabłko lub banan) + 2 tabletki omega 3 lub omega 3-6-9.";
            ++i;
        }

        if (!this.Allergy.Egs && this.FoodPreferences != FoodPref.Vegan) {
            this.bPropositions[i] = "Placek ( wbijasz " + ((3 / 70) * m).toFixed() + " jaja z jednym żółtkiem do miksera + " + ((60 / 70) * m).toFixed() + "-" + m.toFixed() + "gr płatków owsianych" +
                " łyżeczka od herbaty kakao...miksujesz na masę i wylewasz na patelnie teflonowa i" +
                " podpiekasz na małym ogniu z jednej a potem z drugiej strony)";

            if (!this.Allergy.Milk)
                this.bPropositions[i] += " Na wierzchu możesz go posmarować delikatnie serkiem homogenizowanym waniliowym.";

            this.bPropositions[i] += " + 2 tabletki omega 3 lub omega 3-6-9.";
            ++i;
        }

        this.bPropositions[i] = "Miarka(" + ((27 / 70) * m).toFixed() + "-" + ((30 / 70) * m).toFixed() + "gr) odżywki białkowej Whey 100 lub inne " +
            "+ " + ((60 / 70) * m).toFixed() + "-" + m.toFixed() + "gr płatków owsianych zalanych ciepłą wodą + plaster świeżego" +
            " ananasa wkrojony do płatków z odżywką + 2 tabletki omega 3.";
        ++i;

        if (!this.Allergy.Milk && this.FoodPreferences != FoodPref.Vegan) {
            this.bPropositions[i] = ((60 / 70) * m).toFixed() + "-" + m.toFixed() + "gr płatków owsianych + " + ((15 / 70) * m).toFixed() + "-" + ((20 / 70) * m).toFixed() + "gr rodzynek zalanych jogurtem naturalnym."
            ++i;
        }


        this.bPropositions[i] = "mix(" + ((300 / 70) * m).toFixed() + "ml soku z marchwi + " + ((100 / 70) * m).toFixed() + "ml soku z buraków). Soki jednodiowe z krotkim terminem do spożycia."
        ++i;

        // Supper 
        i = 0;

        if (!this.Allergy.Milk && this.FoodPreferences != FoodPref.Vegan) {
            this.sPropositions[i] = ((80 / 70) * m).toFixed() + "gr twarogu chudego.";
            ++i;
        }

        if (!this.Allergy.Egs && this.FoodPreferences != FoodPref.Vegan) {
            this.sPropositions[i] = "Omlet z " + ((3 / 70) * m).toFixed() + " jajek z " + ((1 / 70) * m).toFixed() + " żółtkiem (mozesz wkroić " +
                "cebulę i pomidora " + (this.FoodPreferences != FoodPref.Vegeterian ? "a nawet plaster szynki " : "") + "i dodaj szczyptę soli).";
            ++i;
        }

        if (!this.Allergy.Fish && this.FoodPreferences == FoodPref.All) {
            this.sPropositions[i] = "Kawałek ryby " + ((80 / 70) * m).toFixed() + "-" + ((100 / 70) * m).toFixed() + "gr.";
            ++i;
        }


        this.sPropositions[i] = "Wypić " + ((1 / 70) * m).toFixed(1) + " miarkę odżywki białkowej z wodą.";
        ++i;

        if (!this.Allergy.Milk && !this.Allergy.Nuts) {
            this.sPropositions[i] = ((60 / 70) * m).toFixed() + "gr twarogu chudego + " + ((30 / 70) * m).toFixed() + "gr migdałów.";
            ++i;
        }

        if (!this.Allergy.Milk && !this.Allergy.Soy) {
            this.sPropositions[i] = ((60 / 70) * m).toFixed() + "gr twarogu chudego + " + ((0.5 / 70) * m).toFixed(2) + " awokado."
            ++i;
        }

        if (!this.Allergy.Milk && !this.Allergy.Nuts) {
            this.sPropositions[i] = ((60 / 70) * m).toFixed() + "gr twarogu chudego + " + ((30 / 70) * m).toFixed() + "gr masła orzechowego które ma w składzie minimum 90% orzechów."
            ++i;
        }
    }

}

export class Allergy {
    Egs: boolean = false;
    Milk: boolean = false;
    Nuts: boolean = false;
    Soy: boolean = false;
    Fish: boolean = false;
}