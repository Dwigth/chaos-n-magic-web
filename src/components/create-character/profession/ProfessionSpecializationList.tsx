import { Characteristic } from "../../../data/types/characteristic.type";

export default function ProfessionSpecializationList({ specializations }: { specializations: Characteristic[] }) {
    const specializationValuesItems = specializations.map(characteristic =>
        <li key={characteristic.name}>
            {characteristic.name}: {characteristic.description}
        </li>
    );

    return (
        <ul>
            {specializationValuesItems}
        </ul>
    )
}