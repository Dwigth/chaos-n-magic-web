import { Container, Grid, Typography } from "@mui/material";
import AddDynamicAction from "./GenerateActionInputs";
import ActionTextField from "./ActionTextField";

export function ActionControl() {
  return (
    <Container>
      <Grid
        container
        spacing={1}
        alignContent={"center"}
        justifyContent={"flex-start"}
      >
        <Grid item xs={12}>
          <Typography variant="h5">Acciones</Typography>
        </Grid>
        <Grid item xs={12}>
          {/* <ActionTextField /> */}
        </Grid>
        <Grid item xs={12}>
          <AddDynamicAction />
        </Grid>
      </Grid>
    </Container>
  );
}
