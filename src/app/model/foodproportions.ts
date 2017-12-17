import { Metabolism } from './enums';

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