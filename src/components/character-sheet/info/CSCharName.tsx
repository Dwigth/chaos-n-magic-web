import { TextField } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export const CSCharName = () => {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putCharName(val: string) {
    try {
      const response = await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["characterName"],
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

  const handleCSName = (event: any) => {
    const value = event.target.value as string;
    characterDispatch({
      type: "update_name",
      payload: value,
    });
  };

  return (
    <TextField
      id="info-name"
      variant="outlined"
      color="secondary"
      fullWidth
      label="Nombre del personaje"
      value={characterState.characterName}
      onChange={handleCSName}
      onBlur={() => putCharName(characterState.characterName)}
      type="text"
      name="infoName"
    />
  );
};
