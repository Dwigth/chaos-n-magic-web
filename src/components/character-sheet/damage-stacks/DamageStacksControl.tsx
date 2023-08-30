import { Container, Grid } from "@mui/material";
import { BleedingStackElement } from "./BleedingStack";
import { ToxicStackElement } from "./ToxicStack";
import { PsychicStackElement } from "./PsychicStacks";
import { FC } from "react";

interface Props {
  combat: number;
  fortaleza: number;
  mente: number;
}

export const DamageStacksControl: FC<Props> = ({
  combat,
  fortaleza,
  mente,
}) => {
  return (
    <Container>
      <Grid
        container
        spacing={1}
        alignContent={"center"}
        alignItems={"flex-start"}
      >
        <Grid item xs={4}>
          <BleedingStackElement combatNumber={combat} />
        </Grid>
        <Grid item xs={4}>
          <ToxicStackElement fortress={fortaleza} />
        </Grid>
        <Grid item xs={4}>
          <PsychicStackElement mind={mente} />
        </Grid>
      </Grid>
    </Container>
  );
};
