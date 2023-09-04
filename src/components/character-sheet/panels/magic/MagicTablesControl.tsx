import { Container, Grid, Typography } from "@mui/material";
import { MinorMagicContainer } from "./magic-list-containers/MinorMagicContainer";
import { InitiateMagicContainer } from "./magic-list-containers/InitiateMagicContainer";
import { ProfessionalMagicContainer } from "./magic-list-containers/ProfessionalMagicContainer";
import { MasterMagicContainer } from "./magic-list-containers/MasterMagicContainer";
import { MagicSchoolsLabel } from "./magic-components/MagicSchoolsLabel";

export function MagicTablesControl(){
    return(
        <Container>
            <Grid container direction={"row"} spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h6"> Magia </Typography>
                </Grid>
                <Grid item xs={8}>
                    <MagicSchoolsLabel />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}>
                    <MinorMagicContainer />
                </Grid>
                <Grid item xs={3}>
                    <InitiateMagicContainer />
                </Grid>
                <Grid item xs={3}>
                    <ProfessionalMagicContainer />
                </Grid>
                <Grid item xs={3}>
                    <MasterMagicContainer />
                </Grid>
            </Grid>
        </Container>
    )
}