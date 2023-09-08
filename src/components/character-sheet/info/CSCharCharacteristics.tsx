import { TextField } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export function CSCharCharacteristics() {
  const { characterState, characterDispatch } = useCharacter();
  let params = useParams();

  async function putCharacterstics(val: string) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["characteristic"],
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
      type: "update_characteristic",
      payload: value,
    });
  };
  return (
    <TextField
      fullWidth
      id="info-caracteristicas"
      label="Características"
      variant="outlined"
      color="secondary"
      type="text"
      name="characteristic"
      value={characterState.characteristic}
      onChange={handleChange}
      onBlur={() => putCharacterstics(characterState.characteristic)}
      multiline
      placeholder="Característica (+1)"
      minRows={3}
    />
  );
}
