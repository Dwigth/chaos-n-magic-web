import { Grid, Paper, Typography } from "@mui/material";
import { PowerMana } from "./power-bars/PowerMana";
import { PowerFaith } from "./power-bars/PowerFaith";
import { PowerKi } from "./power-bars/PowerKi";
import { PowerChaos } from "./power-bars/PowerChaos";
import { FC } from "react";

interface Power {
  Datos: any;
}
export const CSPowerControl: FC<Power> = ({ Datos }) => {
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
          <PowerMana Datos={Datos} />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption"> Fé</Typography>
          <PowerFaith Datos={Datos} />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption"> Ki </Typography>
          <PowerKi Datos={Datos} />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption"> Caos </Typography>
          <PowerChaos Datos={Datos} />
        </Grid>
      </Grid>
    </Paper>
  );
};
