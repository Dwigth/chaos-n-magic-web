import { TextField } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export const CSCharProfession = () => {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function submitCloneCS(val: string) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["profession"],
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
      type: "update_profession",
      payload: value,
    });
  };

  return (
    <TextField
      color="secondary"
      fullWidth
      id="info-profesion"
      label="Profesión"
      variant="outlined"
      type="text"
      name="info-profesion"
      value={characterState.profession}
      onChange={handleChange}
      onBlur={() => submitCloneCS(characterState.profession)}
    />
  );
};
