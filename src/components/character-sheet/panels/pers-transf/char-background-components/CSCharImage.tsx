import { Box, TextField } from "@mui/material";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export function CSCharImage() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putAppearance(event: any) {
    const { name } = event.target;
    const value = event.target.value as string;
    try {
      const response = await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["appearance"],
          value: value,
        }),
      });

      if (response.ok) {
        console.log("Se actualizo " + name + " a: " + value);
      } else {
        console.log("Error al actualizar");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleAppearance = (event: any) => {
    const { name } = event.target;
    const value = event.target.value as string;
    characterDispatch({
      type: "update_appearance",
      payload: {
        name,
        value,
      },
    });
  };

  return (
    <Box>
      <TextField
        color="secondary"
        variant="outlined"
        minRows={6}
        label="Apariencia"
        placeholder="Mi personaje es un Foxen de pelaje blanco con gafas..."
        name="appearance"
        value={characterState.appearance}
        onChange={handleAppearance}
        onBlur={(e) => putAppearance(e)}
        fullWidth
        multiline
      />
    </Box>
  );
}
