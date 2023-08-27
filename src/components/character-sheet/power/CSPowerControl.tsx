import { Grid, Paper, Typography } from "@mui/material";
import { PowerMana } from "./power-bars/PowerMana";
import { PowerFaith } from "./power-bars/PowerFaith";

export function CSPowerControl() {
  return (
    <Paper elevation={2}>
      <Grid
        container
        sx={{
          padding: 1
        }}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Grid item xs={12}>
          <Typography variant="h6"> Poder </Typography>
        </Grid>
        <Grid item xs={4}>
          <PowerMana />
        </Grid>
        <Grid item xs={4}>
            <PowerFaith />
        </Grid>
      </Grid>
    </Paper>
  );
}
