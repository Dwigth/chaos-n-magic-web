import { TextField } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export const CSCharSpecies = () => {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putCharSpecie(val: string) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["specie"],
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
      type: "update_specie",
      payload: value,
    });
  };
  return (
    <TextField
      color="secondary"
      fullWidth
      id="info-specie"
      label="Especie"
      variant="outlined"
      name="info-specie"
      value={characterState.specie}
      onChange={handleChange}
      onBlur={() => putCharSpecie(characterState.specie)}
    />
  );
};
