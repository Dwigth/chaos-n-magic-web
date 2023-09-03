import { Container, Grid } from "@mui/material";
import { BleedingStackElement } from "./BleedingStack";
import { ToxicStackElement } from "./ToxicStack";
import { PsychicStackElement } from "./PsychicStacks";
import { FC } from "react";

export const DamageStacksControl = () => {
  return (
    <Container>
      <Grid
        container
        spacing={1}
        alignContent={"center"}
        alignItems={"flex-start"}
      >
        <Grid item xs={4}>
          <BleedingStackElement />
        </Grid>
        <Grid item xs={4}>
          <ToxicStackElement />
        </Grid>
        <Grid item xs={4}>
          <PsychicStackElement />
        </Grid>
      </Grid>
    </Container>
  );
};
