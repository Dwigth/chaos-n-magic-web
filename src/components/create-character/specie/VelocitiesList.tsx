import { SpecieVelocity } from "../../../data/types/specie-velocity.type";

export default function VelocitiesList({ velocities: { values } }: { velocities: SpecieVelocity }) {
    const velocitiesValuesItems = values.map(velocity =>
        <li key={velocity.label}>
            {velocity.label}: {velocity.value}
        </li>
    );

    return (
        <ul>
            {velocitiesValuesItems}
        </ul>
    )
}