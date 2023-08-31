import { Grid, TextField } from "@mui/material";

export default function TalentTextField() {
  return (
    <Grid
      container
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      sx={{ paddingRight: 1}}
    >
      <Grid item xs={8}>
        <TextField
          variant="outlined"
          color="secondary"
          placeholder="Nombre del Talento"
          size="small"
        />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs>
        <TextField
          variant="outlined"
          color="secondary"
          placeholder="Descripción"
          minRows={2}
          multiline
          fullWidth
          inputProps={{ style: { fontSize: "0.8rem" } }}
        />
      </Grid>
    </Grid>
  );
}
