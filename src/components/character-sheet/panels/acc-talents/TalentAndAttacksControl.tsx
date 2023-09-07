import { Grid, Paper } from "@mui/material";
import { ActionControl } from "./ActionControl";
import { TalentControls } from "./TalentControls";

export function TalentAndAttacksControl() {
  return (
    <Grid
      container
      direction="row"
      alignItems={"flex-start"}
      justifyContent={"space-evenly"}
      sx={{ width: "100%", padding: 2 }}
    >
      <Grid
        item
        lg={6}
        xs={12}
        borderRight={2}
        sx={{ width: "100%", minWidth: "50%" }}
      >
        <Paper elevation={1}>
          <ActionControl />
        </Paper>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Paper elevation={1}>
          <TalentControls />
        </Paper>
      </Grid>
    </Grid>
  );
}
