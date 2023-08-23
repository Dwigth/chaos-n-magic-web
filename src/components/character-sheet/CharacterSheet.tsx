// import React from "react";
import CSInfo from "./info/CSinfo";
import { CSEnergyControl } from "./energy/CSEnergyControl";
import CSstats from "./stats/CSstats";
import Panels from "./panels/panels";

import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import CSAttributes from "./attributes/CSattributes";
import CSDefense from "./defense/CSDefense";

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
        <Grid container xs={10} columns={24}>
          <Grid xs={24}>
            <CSDefense />
          </Grid>
          <Grid xs={24}>
            <CSEnergyControl />
          </Grid>
          <Grid xs={24}>
            <CSAttributes />
          </Grid>
        </Grid>
        <Grid xs={6}>
          <CSstats />
        </Grid>
        <Grid xs={24}>
          <Panels />
        </Grid>
      </Grid>
    </Box>
  );
}
