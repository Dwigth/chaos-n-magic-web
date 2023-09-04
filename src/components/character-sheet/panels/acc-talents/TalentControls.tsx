import { Grid, Typography, Container } from "@mui/material";
import AddDynamicTalent from "./GenerateTalentsInputs";
import TalentTextField from "./TalentTextField";

export function TalentControls() {
  return (
    <Container>
      <Grid container spacing={1} alignItems={"stretch"}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ width: "100%" }} align="left">
            Talentos
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* <TalentTextField /> */}
        </Grid>
        <Grid item xs={12}>
          <AddDynamicTalent />
        </Grid>
      </Grid>
    </Container>
  );
}
