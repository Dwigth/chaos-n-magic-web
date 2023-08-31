import CSInfo from "./info/CSinfo";
import { CSEnergyControl } from "./energy/CSEnergyControl";

import Grid from "@mui/material/Unstable_Grid2";
import { Box, IconButton, Typography } from "@mui/material";
import { CSAttributes } from "./attributes/CSattributes";
import CSDefense from "./defense/CSDefense";
import CSStanceControl from "./stance/CSStanceControl";
import { CSLevelControl } from "./info/level/CSLevelControl";
import { DamageStacksControl } from "./damage-stacks/DamageStacksControl";
import { CSPowerControl } from "./power/CSPowerControl";
import { useState } from "react";
import { CSSensesControl } from "./info/Senses/CSSensesControl";
import TabPanel from "./panels/TabPanel";
import LockIcon from "@mui/icons-material/Lock";

export default function characterSheet() {
  const [combat, setCombat] = useState(0);
  const [fort, setFortess] = useState(0);
  const [mind, setMind] = useState(0);
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "0%",
        marginBottom: "2%",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
      >
        <Grid xs={1}>
          <Typography variant="overline" color="secondary">
            {" "}
            ID de la Hoja
          </Typography>
        </Grid>
        <Grid xs={1}>
          <IconButton color="secondary">
            <LockIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        columns={24}
        rowSpacing={1}
        spacing={1}
        alignItems={"stretch"}
        justifyContent={"center"}
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
      >
        <Grid xs={6}>
          <CSInfo />
        </Grid>
        <Grid container xs={12} columns={24}>
          <Grid xs={14}>
            <CSDefense />
          </Grid>
          <Grid container xs={10} direction={"column"}>
            <Grid xs>
              <CSStanceControl />
            </Grid>
            <Grid xs>
              <DamageStacksControl
                combat={combat}
                fortaleza={fort}
                mente={mind}
              />
            </Grid>
          </Grid>
          <Grid xs={24}>
            <CSEnergyControl />
          </Grid>
          <Grid xs={24}>
            <CSAttributes
              Combate={(c) => setCombat(c)}
              Fortaleza={(f) => setFortess(f)}
              Mente={(m) => setMind(m)}
            />
          </Grid>
        </Grid>
        <Grid xs={6}>
          <CSLevelControl />
          <Grid xs={6}>
            <CSPowerControl />
          </Grid>
          <Grid xs={6}>
            <CSSensesControl />
          </Grid>
        </Grid>
        <Grid xs={24}>
          <TabPanel />
        </Grid>
      </Grid>
    </Box>
  );
}
