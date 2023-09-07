import { Box, Grid, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";

export function CSCharWeight() {
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
    <Box>
      <Grid
        spacing={1}
        alignItems={"center"}
        justifyContent={"flex-end"}
        container
      >
        <Grid item xs={4} md={3}>
          <Typography variant={"body1"}>Peso</Typography>
        </Grid>
        <Grid item xs={8} md={8}>
          <TextField
            id="charweight"
            name="weight"
            variant="outlined"
            size="small"
            placeholder="0kg (Pesado)"
            value={characterState.details.weight}
            onChange={handleDetail}
            onBlur={() => putDetails("weight", characterState.details.weight)}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
}
