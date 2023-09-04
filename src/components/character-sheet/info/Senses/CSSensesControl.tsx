import { Grid, Paper, Typography } from "@mui/material";
import { SenseSight } from "./senses-componens/SenseSight";
import { SenseHearing } from "./senses-componens/SenseHearing";
import { FC } from "react";

interface Sense {
  senses: number;
}

export const CSSensesControl: FC<Sense> = ({ senses }) => {
  return (
    <Paper elevation={2} sx={{ marginTop: "2%", padding: "5%" }}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body2" textAlign={"center"}>
            Sentidos
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SenseSight senses={senses} />
        </Grid>
        <Grid item xs={12}>
          <SenseHearing senses={senses} />
        </Grid>
      </Grid>
    </Paper>
  );
};
