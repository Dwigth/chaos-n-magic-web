import CreateCharacterStepper from "./CreateCharacterStepper";
import ProfessionSelector from "./profession/ProfessionSelector";
import SpecieSelector from "./specie/SpecieSelector";
import AttributeSelector from "./attributes/AttributeSelector";

export default function CreateCharacter() {
  return (
    <CreateCharacterStepper
      steps={[
        {
          label: "Select Specie",
          element: <SpecieSelector />,
        },
        {
          label: "Select profession",
          element: <ProfessionSelector />,
        },
        {
          label: "Select attributes",
          element: <AttributeSelector />,
        },
      ]}
    />
  );
}
