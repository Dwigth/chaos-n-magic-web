import { Grid, Paper, Typography } from "@mui/material";
import { PowerMana } from "./power-bars/PowerMana";
import { PowerFaith } from "./power-bars/PowerFaith";
import { PowerKi } from "./power-bars/PowerKi";
import { PowerChaos } from "./power-bars/PowerChaos";

export const CSPowerControl = () => {
  return (
    <Paper elevation={2}>
      <Grid
        container
        sx={{
          padding: 1,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <Typography variant="h6"> Poder </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption"> Maná </Typography>
          <PowerMana />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption"> Fé</Typography>
          <PowerFaith />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption"> Ki </Typography>
          <PowerKi />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption"> Caos </Typography>
          <PowerChaos />
        </Grid>
      </Grid>
    </Paper>
  );
};
