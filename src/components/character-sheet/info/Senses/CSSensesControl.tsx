import { Grid, Paper } from "@mui/material";
import { SenseSight } from "./senses-componens/SenseSight";
import { SenseHearing } from "./senses-componens/SenseHearing";

export const CSSensesControl = () => {
  return (
    <Paper elevation={2} sx={{ marginTop: "2%", padding: "5%" }}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <SenseSight />
        </Grid>
        <Grid item xs={12}>
          <SenseHearing />
        </Grid>
      </Grid>
    </Paper>
  );
};
