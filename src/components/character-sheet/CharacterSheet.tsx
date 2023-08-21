// import React from "react";
import CSInfo from "./info/CSinfo";
import CSenergy from "./energy/CSenergy";
import CSstats from "./stats/CSstats";
import Panels from "./panels/panels";

import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import CSAttributes from "./attributes/CSattributes";
import CSDefense from "./defense/CSdefense";

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
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
      >
        <Grid xs={6}>
          <CSInfo />
        </Grid>
        <Grid xs={8}>
          <Grid xs={24}>
            <CSDefense />
          </Grid>
          <Grid xs={24}>
            <CSenergy />
          </Grid>
        </Grid>
        <Grid xs={10}>
          <CSstats />
        </Grid>
        <Grid xs={12}>
          <Grid xs></Grid>
          <Grid xs={12}>
            <CSAttributes />
          </Grid>
          <Grid xs></Grid>
        </Grid>
        <Grid xs={24}>
          <Panels />
        </Grid>
      </Grid>
    </Box>
  );
}
