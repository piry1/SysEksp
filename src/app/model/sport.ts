import { Degree } from './enums';
import { fail } from 'assert';

export class Sport {
    ContraPartial: boolean = false;
    Contra: boolean = false;
    CanSwim: boolean = false;
    Time: Degree = Degree.Medium;
    Money: Degree = Degree.Medium;
    Engagement: Degree = Degree.Medium;
}