import { FoodPref, Degree, Plans } from './enums';
import { UserData } from './userdata';

export class Diet {
    Allergy: Allergy = new Allergy();
    FoodPreferences: FoodPref = FoodPref.All;
    Time: Degree = Degree.Medium;
    Money: Degree = Degree.Medium;
    Engagement: Degree = Degree.Medium;

    MeelCount: number = 0;
    bPropositions: string[] = [];
    sPropositions: string[] = [];
    mPropositions: string[] = [];

    countMeals() {

        var te = Number(this.Time) + Number(this.Engagement);
        if (te < 2)
            this.MeelCount = 1;
        else if (te < 3)
            this.MeelCount = 2;
        else if (te < 4)
            this.MeelCount = 3;
        else
            this.MeelCount = 4;

        var k = 3 / this.MeelCount;

        this.bPropositions = [];
        this.sPropositions = [];
        this.mPropositions = [];

        var b = UserData.body;
        var m = ((b.Weight - 5) * b.Cpm) / b.Bmr;

        //#region Brekfast

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

        //#endregion

        //#region Meals in the middle

        i = 0;

        if (this.FoodPreferences == FoodPref.All) {
            this.mPropositions[i] = ((90 / 70) * m * k).toFixed() + "-" + ((100 / 70) * m * k).toFixed() + "gr mięsa(piers kurczaka, indyk, cielecina, wolowina) " +
                ((!this.Allergy.Fish) ? "lub ryby (panga, sola, tilapia, dorsz, mintaj, losos) " : "") +
                "zrobionych na patelni teflonowej bez tłuszczu z delikatnym dodatkiem wody lub " +
                "specjalnym sprayu do smażenia (Do przygotowania można używać przypraw - papryka słodka, curry vegeta itp). | | Do tego jedno z poniższych: ||" +
                " - " + ((50 / 70) * m * k).toFixed() + "gr makaronu zytniego razowego |" +
                " - " + ((50 / 70) * m * k).toFixed() + "gr ryżu brązowego|" +
                " - " + ((50 / 70) * m * k).toFixed() + "gr ryżu basmati lub kaszy gryczanej, jaglanej lub pęczak|" +
                " - " + ((4 / 70) * m * k).toFixed() + "-" + ((5 / 70) * m * k).toFixed() + " kromek pieczywa Wasa|" +
                " - " + ((170 / 70) * m * k).toFixed() + "-" + ((200 / 70) * m * k).toFixed() + "gr ziemniaków w mundurkach (polskich lub słodkich typu Bataty) (ziemniaki raz na 2 dni nie czesciej)";
            i++;
        }


        this.mPropositions[i] = ((50 / 70) * m * k).toFixed() + "gram ciecierzycy/soczewicy lub " + ((2 / 70) * m * k).toFixed() + "-" + ((3 / 70) * m * k).toFixed() +
            " koltlety sojowe lub " + ((100 / 70) * m).toFixed() + "gram tofu.  | | Do tego jedno z poniższych: ||" +
            " - " + ((50 / 70) * m * k).toFixed() + "gr makaronu zytniego razowego |" +
            " - " + ((50 / 70) * m * k).toFixed() + "gr ryżu brązowego|" +
            " - " + ((50 / 70) * m * k).toFixed() + "gr ryżu basmati lub kaszy gryczanej, jaglanej lub pęczak|" +
            " - " + ((4 / 70) * m * k).toFixed() + "-" + ((5 / 70) * m * k).toFixed() + " kromek pieczywa Wasa|" +
            " - " + ((170 / 70) * m * k).toFixed() + "-" + ((200 / 70) * m * k).toFixed() + "gr ziemniaków w mundurkach (polskich lub słodkich typu Bataty) (ziemniaki raz na 2 dni nie czesciej)";
        i++;


        this.mPropositions[i] = "Zupa krem np: |" +
            " - " + ((50 / 70) * m * k).toFixed() + " gram soczewicy zielonej |" +
            " - " + ((170 / 70) * m * k).toFixed() + "-" + ((200 / 70) * m * k).toFixed() + " gram batatów |" +
            " - " + " cebulka |" +
            " - " + ((0.5 / 70) * m * k).toFixed(1) + " puszki pomidorów albo przecieru |" +
            " - " + "łyżeczka żółtej pasty curry |" +
            " - " + "odrobina vegety |" +
            "Wszystko razem gotujesz 20-25min i jak wystygnie troszceczke to blendujesz na mase.";
        i++;

        //#endregion

        //#region Supper 
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

        //#endregion
    }

}

export class Allergy {
    Egs: boolean = false;
    Milk: boolean = false;
    Nuts: boolean = false;
    Soy: boolean = false;
    Fish: boolean = false;
}