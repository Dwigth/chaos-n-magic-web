import { ThemeProvider } from "@emotion/react";
import { CloneCharacterSheet } from "./menu/CloneNewCharacterButton";
import { CreateNewCharacterSheet } from "./menu/CreateNewCharacterButton";
import { OpenCharacterSheet } from "./menu/OpenCharacterSheet";

import { Container, Grid, Paper } from "@mui/material";
import { cnmMenu } from "../style/mainTheme.tsx";
import { FC } from "react";

interface PropsId {
  Datos: (data: JSON) => void;
}

export const CharMainMenu: FC<PropsId> = ({ Datos }) => {
  return (
    <ThemeProvider theme={cnmMenu}>
      <Container>
        <Paper
          elevation={8}
          style={{
            padding: "5px",
          }}
        >
          <Grid
            container
            spacing={1}
            alignItems="stretch"
            direction={"column"}
            sx={{ flexGrow: 2, display: "flex" }}
          >
            <Grid item xs={8}>
              <CreateNewCharacterSheet />
            </Grid>
            <Grid item xs={8}>
              <CloneCharacterSheet />
            </Grid>
            <Grid item xs={8}>
              <OpenCharacterSheet Datos={(e) => Datos(e)} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};
