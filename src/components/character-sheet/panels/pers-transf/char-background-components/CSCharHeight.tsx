import { Box, Grid, Typography, TextField } from "@mui/material";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export function CSCharHeight() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putDetails(name: string, val: string) {
    try {
      const response = await fetch(
        import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            heroSheetId: params.sheetId,
            propertyToUpdate: ["details", name],
            value: val,
          }),
        }
      );

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
          <Typography variant={"body1"}>Altura</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="charheight"
            name="height"
            variant="outlined"
            size="small"
            value={characterState.details.height}
            onChange={handleDetail}
            onBlur={() => putDetails("height", characterState.details.height)}
            placeholder="1.5m (Mediano)"
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
}
