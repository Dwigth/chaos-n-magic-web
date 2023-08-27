import { Grid, Paper, Typography } from "@mui/material";
import { CSMilestones } from "./CSMilestones";
import { LevelTextField } from "./CSLevelTextField";

export function CSLevelControl() {
  return (
    <Paper elevation={1} style={{ padding: "5%" }}>
      <Grid container spacing={1} direction="row" alignItems={"flex-start"}>
        <Grid item container direction={"column"} xs={8}>
          <Grid item xs={12}>
            <Typography> Hitos </Typography>
          </Grid>
          <Grid item container xs={12} direction="row" columns={5}>
            <Grid item xs={1}>
              <CSMilestones />
            </Grid>
            <Grid item xs={1}>
              <CSMilestones />
            </Grid>
            <Grid item xs={1}>
              <CSMilestones />
            </Grid>
            <Grid item xs={1}>
              <CSMilestones />
            </Grid>
            <Grid item xs={1}>
              <CSMilestones />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <LevelTextField />
        </Grid>
      </Grid>
    </Paper>
  );
}
