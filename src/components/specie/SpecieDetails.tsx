import { SelectedSpecie } from "../../data/types/specie.type";
// import TalentsList from "./TalentsList";
import VelocitiesList from "./VelocitiesList";

export default function SpecieDetails({ specie: { specieName, specie } }: { specie: SelectedSpecie }) {
    if (!specie) {
        return null;
    }

    return (
        <>
            <h1>{specieName}</h1>
            <i>{specie?.type}</i>
            <p>{specie?.description}</p>
            {
                specie?.velocities.values.length > 0 ? (
                    <h4>Velocidad: <VelocitiesList velocities={specie?.velocities} /> </h4>
                ) : (<></>)
            }
            <h4>Caracteristica</h4>
            <p>{specie?.characteristic}</p>
            {/* <TalentsList talents={specie.talents} /> */}
        </>
    )
}