import { Grid, TextField } from "@mui/material";

export default function ActionTextField() {
  return (
    <Grid container direction="row" sx={{ marginTop: 1 }}>
      <Grid item xs={3}>
        <TextField variant="standard" placeholder="Nombre" size="small" />
      </Grid>
      <Grid item xs={2}>
        <TextField
          variant="standard"
          placeholder="1dcm"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={1}>
        <img
          src="/src/assets/images/icons/DiceIcon_DCM_Mini.png"
          width={"80%"}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField variant="standard" placeholder="Tipo de Daño" size="small" />
      </Grid>
      <Grid item xs={3}>
        <TextField variant="standard" placeholder="3 E, 1 P" size="small" />
      </Grid>
    </Grid>
  );
}
