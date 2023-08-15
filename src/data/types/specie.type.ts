import { SpeciesDiet } from "../enum/specie-diet.enum";
import { SpecieVelocity } from "./specie-velocity.type";
import { Talent } from "./talent.type";

export type Specie = {
    type: SpeciesDiet;
    description: string;
    velocities: SpecieVelocity;
    characteristic: string;
    talents: Talent[];
};

export type SelectedSpecie = { specieName: string, specie: Specie }