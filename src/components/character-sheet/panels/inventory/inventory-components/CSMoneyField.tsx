import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export function CSMoneyField() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putCoins(val: string) {
    try {
      await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["inventory", "coins"],
          value: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleCoins = (event: any) => {
    const value = event.target.value as string;
    characterDispatch({
      type: "update_coins",
      payload: value,
    });
  };
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      justifyContent={"flex-end"}
      alignItems="center"
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <Typography variant="body2" color="success" justifyContent={"right"}>
          Riquezas
        </Typography>
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField
          type="number"
          variant="standard"
          value={characterState.inventory.coins}
          onChange={handleCoins}
          onBlur={() => putCoins(characterState.inventory.coins)}
          InputProps={{
            startAdornment: <InputAdornment position="start">¢</InputAdornment>,
          }}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
