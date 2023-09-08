import { Container, Grid, Typography } from "@mui/material";
import { MinorMagicContainer } from "./magic-list-containers/MinorMagicContainer";
import { InitiateMagicContainer } from "./magic-list-containers/InitiateMagicContainer";
import { ProfessionalMagicContainer } from "./magic-list-containers/ProfessionalMagicContainer";
import { MasterMagicContainer } from "./magic-list-containers/MasterMagicContainer";
import { MagicSchoolsLabel } from "./magic-components/MagicSchoolsLabel";

export function MagicTablesControl() {
  return (
    <Container maxWidth={false}>
      <Grid container item xs={24} direction={"row"} spacing={1}>
        <Grid item xs={24}>
          <Typography variant="h6"> Magia </Typography>
        </Grid>
        <Grid item xs={12}>
          <MagicSchoolsLabel />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={24} sm={24} md={3} lg={3} xl={3}>
          <MinorMagicContainer />
        </Grid>
        <Grid item xs={24} sm={24} md={3} lg={3} xl={3}>
          <InitiateMagicContainer />
        </Grid>
        <Grid item xs={24} sm={24} md={3} lg={3} xl={3}>
          <ProfessionalMagicContainer />
        </Grid>
        <Grid item xs={24} sm={24} md={3} lg={3} xl={3}>
          <MasterMagicContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
