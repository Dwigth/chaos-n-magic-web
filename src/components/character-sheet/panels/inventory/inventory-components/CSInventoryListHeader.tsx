import { Grid, Typography } from "@mui/material";

export function CSInventoryListHeader() {
  return (
    <Grid container direction={"row"} spacing={0.1} sx={{ marginTop: 2 }}>
      <Grid item xs={5.5}>
        <Typography variant="body2" sx={{ fontSize: "10px" }}>
          Cantidad
        </Typography>
      </Grid>
      <Grid item xs={4.2}>
        <Typography variant="body2"> Objeto </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2"> Peso </Typography>
      </Grid>
      <Grid item xs={0}>
        <Typography variant="body2" sx={{ fontSize: "10px" }}>
          {" "}
          Equipado{" "}
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
