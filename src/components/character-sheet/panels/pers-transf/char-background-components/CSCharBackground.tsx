import { Box, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";

export function CSCharBackground() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putDetails(name: string, val: string) {
    try {
      const response = await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["details", name],
          value: val,
        }),
      });

      if (response.ok) {
        console.log("Se actualizo " + name + " a: " + val);
      } else {
        console.log("Error al actualizar");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleDetail = (event: any) => {
    const { name } = event.target;
    const value = event.target.value as string;
    characterDispatch({
      type: "update_details",
      payload: {
        name,
        value,
      },
    });
  };
  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        id="charbackground"
        name="backstory"
        color="secondary"
        placeholder="Nació en las calles de Otualia..."
        variant="outlined"
        minRows={4}
        size="small"
        value={characterState.details.backstory}
        onChange={handleDetail}
        onBlur={() => putDetails("backstory", characterState.details.backstory)}
        inputProps={{
          style: {
            fontSize: "12px",
          },
        }}
        sx={{ fontSize: "10px" }}
        multiline
        fullWidth
      />
    </Box>
  );
}
