import { TextField } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export const CSCharProfession = () => {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function submitCloneCS(val: string) {
    try {
      const response = await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["profession"],
          value: val,
        }),
      });

      if (response.ok) {
        console.log("Consulta exitosa");
      } else {
        console.log("Error al actualizar");
      }
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
