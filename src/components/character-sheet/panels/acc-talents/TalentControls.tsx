import { Grid, Typography, Container } from "@mui/material";
import AddDynamicInput from "./GenerateInputs";

export function TalentControls() {
  return (
    <Container sx={{ width: "100%" }}>
      <Grid container spacing={1} alignItems={"stretch"}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ width: "100%" }} align="left">
            Talentos
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <AddDynamicInput />
        </Grid>
      </Grid>
    </Container>
  );
}
