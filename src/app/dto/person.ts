import { UserUcbDto } from "./user.ucb.dto";

export interface Person{
    personId: number;
    firstName: String;
    lastName: String;
    ci: String;
    phoneNumber: String;
    user: UserUcbDto;
}