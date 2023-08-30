import CSInfo from "./info/CSinfo";
import { CSEnergyControl } from "./energy/CSEnergyControl";
import Panels from "./panels/TabPanel";

import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import CSAttributes from "./attributes/CSattributes";
import CSDefense from "./defense/CSdefense";
import CSStanceControl from "./stance/CSStanceControl";
import { CSLevelControl } from "./info/level/CSLevelControl";
import { DamageStacksControl } from "./damage-stacks/DamageStacksControl";
import { CSPowerControl } from "./power/CSPowerControl";
import { CSSensesControl } from "./info/Senses/CSSensesControl";
import TabPanel from "./panels/TabPanel";

export default function characterSheet() {
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "2%",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
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
              <DamageStacksControl />
            </Grid>
          </Grid>
          <Grid xs={24}>
            <CSEnergyControl />
          </Grid>
          <Grid xs={24}>
            <CSAttributes />
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
