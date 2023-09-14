import { Container, Grid } from "@mui/material";
import { BleedingStackElement } from "./BleedingStack";
import { ToxicStackElement } from "./ToxicStack";
import { PsychicStackElement } from "./PsychicStacks";

export const DamageStacksControl = () => {
  return (
    <Container>
      <Grid
        container
        spacing={1}
        alignContent={"center"}
        alignItems={"flex-start"}
      >
        <Grid item xs={5} sm={4} md={4} lg={4} xl={4}>
          <BleedingStackElement />
        </Grid>
        <Grid item xs={5} sm={4} md={4} lg={4} xl={4}>
          <ToxicStackElement />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
          <PsychicStackElement />
        </Grid>
      </Grid>
    </Container>
  );
};
