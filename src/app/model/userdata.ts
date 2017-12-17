import { User } from './user';
import { Diet } from './diet';
import { Sport } from './sport';

export class UserData {
    static body: User = new User();
    static diet: Diet = new Diet();
    static sport: Sport = new Sport();
}