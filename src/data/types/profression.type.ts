import { Characteristic } from "./characteristic.type";

export type Profession = {
    name: string;
    description: string;
    coins: number;
    object: string;
    characteristics: Characteristic[];
}

export type SelectedProfession = { professionName: string, profession: Profession }