import { SelectedProfession } from "../../../data/types/profression.type";
import ProfessionSpecializationList from "./ProfessionSpecializationList";

export default function ProfessionDetails({ profession: { profession, professionName } }: { profession: SelectedProfession }) {
    if (!profession) {
        return null;
    }
    return (
        <>
            <h1>{professionName}</h1>
            <i>Description: {profession?.description}</i>
            <p>Initial coins: {profession?.coins}</p>
            <p>Object: {profession?.object}</p>
            {
                profession?.characteristics.length > 0 ? (
                    <>
                        <h3>Specializations:</h3>
                        <ProfessionSpecializationList specializations={profession?.characteristics} />
                    </>
                ) : (<></>)
            }
        </>
    )
}