import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCharacter } from "../reducer-context/CharacterContextProvider";

export function CSCharLanguages() {
  const { characterState, characterDispatch } = useCharacter();
  let params = useParams();

  async function putCharacterKnownLanguages(val: string) {
    try {
      await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["characterKnownLanguages"],
          value: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (event: any) => {
    const value = event.target.value as string;
    characterDispatch({
      type: "update_characterKnownLanguages",
      payload: value,
    });
  };

  return (
    <TextField
      fullWidth
      id="info-languages"
      label="Idiomas"
      variant="outlined"
      color="secondary"
      type="text"
      name="characterKnownLanguages"
      value={characterState.characterKnownLanguages}
      onChange={handleChange}
      onBlur={() =>
        putCharacterKnownLanguages(characterState.characterKnownLanguages)
      }
      multiline
      placeholder="Idioma 1"
      minRows={2}
    />
  );
}
