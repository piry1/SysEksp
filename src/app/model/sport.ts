import { Degree, Plans } from './enums';
import { fail } from 'assert';
import { UserData } from './userdata';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

export class Sport {
    ContraPartial: boolean = false;
    Contra: boolean = false;
    CanSwim: boolean = false;
    Time: Degree = Degree.Medium;
    Money: Degree = Degree.Medium;
    Engagement: Degree = Degree.Medium;

    sProposition: string = "";
    sExercises: string[] = [];



    setTraining() {

        this.sProposition = "";
        this.sExercises = [];

        if (this.Contra)
            this.sProposition = "Nie powinieneś wykonywać ćwiczeń fizycznych ze względu na stan zdrowia!";
        else if (this.ContraPartial)
            this.setPartial();
        else if (UserData.body.Plans == Plans.Loose)
            this.setAerobTraining();
        else if (UserData.body.Plans == Plans.Gain)
            this.setMassTraining();
        else if (UserData.body.Plans == Plans.Stay)
            this.setStayTraining();
    }

    setAerobTraining() {

        this.sProposition = "";
        this.sExercises = [];
        var i = 0;
        var upa = Number(UserData.body.PhisicalActivity);
        var iUpa = upa * 5;

        var ta = Number(this.Time) + Number(this.Engagement);
        if (UserData.body.Plans == Plans.Loose) {
            ta++;
        }
        if (upa < 2) {
            ta -= 2;
        } else if (upa < 5) {
            ta--;
        }
        if (ta == 0) ta = 1;


        this.sProposition = "Ćwiczenia aerobowe w układzie tygodniowym: ||" +
            "- 1 tydzień: " + ta + (ta == 1 ? " raz" : " razy") + " w tygodniu po " + (30 + iUpa) + " minut |" +
            "- 2 tydzień: " + ta + (ta == 1 ? " raz" : " razy") + " w tygodniu po " + (35 + iUpa) + " minut |" +
            "- 3 tydzień: " + (ta + 1) + " razy po " + (40 + iUpa) + " minut |" +
            "- 4 tydzień: " + (ta + 1) + " razy po " + (45 + iUpa) + " minut";

        if (Number(this.Money) > 0) {
            this.sExercises[i] = "rowerek"; ++i;
            this.sExercises[i] = "stepper"; ++i;
            this.sExercises[i] = "orbitrek"; ++i;
            this.sExercises[i] = "bieżnia"; ++i;
        }

        if (this.CanSwim && Number(this.Money) > 0) {
            this.sExercises[i] = "basen"; ++i;
        }

        this.sExercises[i] = "jogging"; ++i;

        if (Number(UserData.body.PhisicalActivity) < 3) {
            this.sExercises[i] = "szybki spacer"; ++i;
        }

    }

    setMassTraining() {

        var upa = Number(UserData.body.PhisicalActivity);
        var i = 0;

        var ta = Number(this.Time) + Number(this.Engagement);
        if (UserData.body.Plans == Plans.Loose) {
            ta++;
        }
        if (upa < 2) {
            ta -= 2;
        } else if (upa < 5) {
            ta--;
        }
        if (ta == 0) ta = 1;
        ta++;

        this.sProposition = "Trening siłowy " + ta + (ta == 1 ? " raz" : " razy") + " w tygodniu";

        this.sExercises[i] = "KLATKA:"; ++i;

        if (Number(this.Money) > 0) {
            this.sExercises[i] = "wyciskanie sztangi na ławeczce poziomej"; ++i;
            this.sExercises[i] = "wyciskanie hantli na ławeczce skośnej w górę"; ++i;
            this.sExercises[i] = "rozpiętki ze sztangielkami na ławeczce dodatniej"; ++i;

        } this.sExercises[i] = "pompki"; ++i;

        this.sExercises[i] = "TRICEPS: "; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "prostowanie ramion na wyciągu"; ++i;
            this.sExercises[i] = "francuskie wyciskanie sztangi leżąc"; ++i;
            this.sExercises[i] = "odwrotne pompki na poręczach"; ++i;
        } this.sExercises[i] = "pompki"; ++i;


        this.sExercises[i] = "BRZUCH: "; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "wznosy kolan do klatki w zwisie na drążku"; ++i;
            this.sExercises[i] = "spięcia brzucha na ławeczce"; ++i;
        }
        this.sExercises[i] = "scyzoryki"; ++i;
        this.sExercises[i] = "brzuszki"; ++i;

        this.sExercises[i] = "NOGI:"; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "przysiady ze sztangą na barkach"; ++i;
            this.sExercises[i] = "wypychanie ciężaru na suwnicy"; ++i;
            this.sExercises[i] = "zginanie podudzi na maszynie leżąc"; ++i;
            this.sExercises[i] = "wspięcia na palce na maszynie stojąc lub siedząc"; ++i;
        }
        this.sExercises[i] = "wyprosty nóg na krzesełku"; ++i;


        this.sExercises[i] = "BICEPS:"; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "uginanie ramion ze sztangą stojąc"; ++i;
            this.sExercises[i] = "uginanie ramion z gryfem łamanym na modlitewniku"; ++i;
            this.sExercises[i] = "uginanie ramion chwytem młotkowym"; ++i;
        }
        this.sExercises[i] = "podciąganie na drążku"; ++i;

        this.sExercises[i] = "PLECY:"; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "przyciąganie drążka wyciągu górnego do klatki"; ++i;
            this.sExercises[i] = "wiosłowanie sztangą podchwytem"; ++i;
            this.sExercises[i] = "prostowanie tułowia na ławce rzymskiej"; ++i;
            this.sExercises[i] = "szrugsy z hantlami"; ++i;
        }
        this.sExercises[i] = "pompki"; ++i;
        this.sExercises[i] = "podciąganie na drążku"; ++i;
    }

    setStayTraining() {
        var upa = Number(UserData.body.PhisicalActivity);
        var i = 0;

        var ta = Number(this.Time) + Number(this.Engagement);
        if (UserData.body.Plans == Plans.Loose) {
            ta++;
        }
        if (upa < 2) {
            ta -= 2;
        } else if (upa < 5) {
            ta--;
        }
        if (ta == 0) ta = 1;
        ta++;
        this.sProposition = "Trening mieszany " + ta + (ta == 1 ? " raz" : " razy") + " w tygodniu. Staraj się mieszczć ćwiczenia aerobowe z siłowymi.";

        this.sExercises[i] = "ĆWICZENIA AEROBOWE:"; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "rowerek"; ++i;
            this.sExercises[i] = "stepper"; ++i;
            this.sExercises[i] = "orbitrek"; ++i;
            this.sExercises[i] = "bieżnia"; ++i;
        }

        if (this.CanSwim && Number(this.Money) > 0) {
            this.sExercises[i] = "basen"; ++i;
        }

        this.sExercises[i] = "jogging"; ++i;

        if (Number(UserData.body.PhisicalActivity) < 3) {
            this.sExercises[i] = "szybki spacer"; ++i;
        }

        this.sExercises[i] = "ĆWICZENIA SIŁOWE:"; ++i;
        this.sExercises[i] = "KLATKA:"; ++i;

        if (Number(this.Money) > 0) {
            this.sExercises[i] = "wyciskanie sztangi na ławeczce poziomej"; ++i;
            this.sExercises[i] = "wyciskanie hantli na ławeczce skośnej w górę"; ++i;
            this.sExercises[i] = "rozpiętki ze sztangielkami na ławeczce dodatniej"; ++i;

        } this.sExercises[i] = "pompki"; ++i;

        this.sExercises[i] = "TRICEPS: "; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "prostowanie ramion na wyciągu"; ++i;
            this.sExercises[i] = "francuskie wyciskanie sztangi leżąc"; ++i;
            this.sExercises[i] = "odwrotne pompki na poręczach"; ++i;
        } this.sExercises[i] = "pompki"; ++i;


        this.sExercises[i] = "BRZUCH: "; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "wznosy kolan do klatki w zwisie na drążku"; ++i;
            this.sExercises[i] = "spięcia brzucha na ławeczce"; ++i;
        }
        this.sExercises[i] = "scyzoryki"; ++i;
        this.sExercises[i] = "brzuszki"; ++i;

        this.sExercises[i] = "NOGI:"; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "przysiady ze sztangą na barkach"; ++i;
            this.sExercises[i] = "wypychanie ciężaru na suwnicy"; ++i;
            this.sExercises[i] = "zginanie podudzi na maszynie leżąc"; ++i;
            this.sExercises[i] = "wspięcia na palce na maszynie stojąc lub siedząc"; ++i;
        }
        this.sExercises[i] = "wyprosty nóg na krzesełku"; ++i;


        this.sExercises[i] = "BICEPS:"; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "uginanie ramion ze sztangą stojąc"; ++i;
            this.sExercises[i] = "uginanie ramion z gryfem łamanym na modlitewniku"; ++i;
            this.sExercises[i] = "uginanie ramion chwytem młotkowym"; ++i;
        }
        this.sExercises[i] = "podciąganie na drążku"; ++i;

        this.sExercises[i] = "PLECY:"; ++i;
        if (Number(this.Money) > 0) {
            this.sExercises[i] = "przyciąganie drążka wyciągu górnego do klatki"; ++i;
            this.sExercises[i] = "wiosłowanie sztangą podchwytem"; ++i;
            this.sExercises[i] = "prostowanie tułowia na ławce rzymskiej"; ++i;
            this.sExercises[i] = "szrugsy z hantlami"; ++i;
        }
        this.sExercises[i] = "pompki"; ++i;
        this.sExercises[i] = "podciąganie na drążku"; ++i;
    }

    setPartial() {
        var i = 0;
        this.sProposition = "Powinieneś ograniczyć wysiłek fizyczny ze wzgkędu na stan zdrowia";
        this.sExercises[i] = "spacer"; ++i;
        this.sExercises[i] = "jazda na rowerze"; ++i;
        this.sExercises[i] = "nordic walking"; ++i;
    }

}