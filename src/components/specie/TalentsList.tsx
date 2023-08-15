import { Talent } from "../../data/types/talent.type";

export default function TalentsList({ talents }: { talents: Talent[] }) {
    const talentsValuesItems = talents.map(talent => <li>{talent.name} {talent.description} {talent.level}</li>)
    return (
        <>
            <ul>{talentsValuesItems}</ul>
        </>
    )
}